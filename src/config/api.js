// API URL 설정
// 프로덕션: Vercel 환경 변수에서 가져옴
// 로컬 개발: localhost 사용
export const API_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.DEV ? 'http://localhost:3001/api' : '/api')
