import React, { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../config/api.js'
import { logAPIError, logAPIResponse } from '../utils/debug.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // 토큰을 localStorage에서 가져오기
  const getToken = () => {
    return localStorage.getItem('token')
  }

  // axios 기본 설정
  axios.defaults.headers.common['Authorization'] = getToken() 
    ? `Bearer ${getToken()}` 
    : ''

  // 초기 로드 시 사용자 정보 확인
  useEffect(() => {
    const token = getToken()
    if (token) {
      fetchUser()
    } else {
      setLoading(false)
    }
  }, [])

  const fetchUser = async () => {
    try {
      const token = getToken()
      if (!token) {
        setLoading(false)
        return
      }

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      const response = await axios.get(`${API_URL}/auth/me`)
      
      if (response.data && response.data.user) {
        setUser(response.data.user)
      } else {
        throw new Error('사용자 정보를 가져올 수 없습니다')
      }
    } catch (error) {
      console.error('사용자 정보 조회 실패:', error)
      localStorage.removeItem('token')
      axios.defaults.headers.common['Authorization'] = ''
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const register = async (username, email, password) => {
    try {
      console.log('회원가입 요청:', { username, email, API_URL: `${API_URL}/auth/register` })
      
      const response = await axios.post(`${API_URL}/auth/register`, {
        username,
        email,
        password
      })

      logAPIResponse(response, '회원가입')

      if (response.data && response.data.token && response.data.user) {
        const { token, user } = response.data
        console.log('회원가입 성공, 사용자 정보:', user)
        
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        setUser(user)
        setLoading(false) // 로딩 상태 해제

        return { success: true, user }
      } else {
        console.error('회원가입 응답 형식 오류:', response.data)
        return {
          success: false,
          error: '회원가입 응답 형식이 올바르지 않습니다'
        }
      }
    } catch (error) {
      logAPIError(error, '회원가입')
      return {
        success: false,
        error: error.response?.data?.error || error.message || '회원가입에 실패했습니다'
      }
    }
  }

  const login = async (email, password) => {
    try {
      console.log('로그인 요청:', { email, API_URL: `${API_URL}/auth/login` })
      
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password
      })

      logAPIResponse(response, '로그인')

      if (response.data && response.data.token && response.data.user) {
        const { token, user } = response.data
        console.log('로그인 성공, 사용자 정보:', user)
        
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        setUser(user)
        setLoading(false) // 로딩 상태 해제

        return { success: true, user }
      } else {
        console.error('로그인 응답 형식 오류:', response.data)
        return {
          success: false,
          error: '로그인 응답 형식이 올바르지 않습니다'
        }
      }
    } catch (error) {
      logAPIError(error, '로그인')
      return {
        success: false,
        error: error.response?.data?.error || error.message || '로그인에 실패했습니다'
      }
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    axios.defaults.headers.common['Authorization'] = ''
    setUser(null)
  }

  const value = {
    user,
    loading,
    register,
    login,
    logout,
    isAuthenticated: !!user
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

