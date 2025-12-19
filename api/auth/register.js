import { json } from '@vercel/node'
import sqlite3 from 'sqlite3'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

// SQLite 데이터베이스 연결 (Vercel 환경에서는 절대 경로 사용)
const getDB = () => {
  // Vercel의 임시 디렉토리 사용
  const dbPath = '/tmp/database.sqlite'
  return new sqlite3.Database(dbPath)
}

const dbGet = (db, sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject(err)
      else resolve(row)
    })
  })
}

const dbRun = (db, sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function(err) {
      if (err) reject(err)
      else resolve({ id: this.lastID, changes: this.changes })
    })
  })
}

export default async function handler(req, res) {
  // CORS 헤더 설정
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed' }, { status: 405 })
  }

  try {
    const { username, email, password } = req.body

    // 입력 검증
    if (!username || !email || !password) {
      return json({ error: '모든 필드를 입력해주세요' }, { status: 400 })
    }

    if (password.length < 6) {
      return json({ error: '비밀번호는 최소 6자 이상이어야 합니다' }, { status: 400 })
    }

    const db = getDB()

    // 데이터베이스 테이블 생성 (최초 실행 시)
    await new Promise((resolve, reject) => {
      db.run(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT UNIQUE NOT NULL,
          email TEXT UNIQUE NOT NULL,
          password TEXT NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `, (err) => {
        if (err) reject(err)
        else resolve()
      })
    })

    // 중복 확인
    const existingUser = await dbGet(
      db,
      'SELECT * FROM users WHERE username = ? OR email = ?',
      [username, email]
    )

    if (existingUser) {
      db.close()
      return json({ error: '이미 존재하는 사용자명 또는 이메일입니다' }, { status: 400 })
    }

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 10)

    // 사용자 생성
    const result = await dbRun(
      db,
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    )

    // JWT 토큰 생성
    const token = jwt.sign(
      { id: result.id, username, email },
      JWT_SECRET,
      { expiresIn: '7d' }
    )

    db.close()

    return json({
      message: '회원가입이 완료되었습니다',
      token,
      user: {
        id: result.id,
        username,
        email
      }
    }, { status: 201 })
  } catch (error) {
    console.error('회원가입 오류:', error)
    return json({ error: '서버 오류가 발생했습니다' }, { status: 500 })
  }
}

