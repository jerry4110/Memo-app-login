import { json } from '@vercel/node'
import sqlite3 from 'sqlite3'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

const getDB = () => {
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

export default async function handler(req, res) {
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
    const { email, password } = req.body

    if (!email || !password) {
      return json({ error: '이메일과 비밀번호를 입력해주세요' }, { status: 400 })
    }

    const db = getDB()

    // 사용자 조회
    const user = await dbGet(
      db,
      'SELECT * FROM users WHERE email = ?',
      [email]
    )

    db.close()

    if (!user) {
      return json({ error: '이메일 또는 비밀번호가 올바르지 않습니다' }, { status: 401 })
    }

    // 비밀번호 확인
    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      return json({ error: '이메일 또는 비밀번호가 올바르지 않습니다' }, { status: 401 })
    }

    // JWT 토큰 생성
    const token = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    )

    return json({
      message: '로그인 성공',
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    })
  } catch (error) {
    console.error('로그인 오류:', error)
    return json({ error: '서버 오류가 발생했습니다' }, { status: 500 })
  }
}

