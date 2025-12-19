# 🚨 회원가입 오류 빠른 해결 가이드

## 문제 원인
프론트엔드는 Vercel에 배포되었지만, 백엔드 서버가 배포되지 않아 API 요청이 실패합니다.

## ⚡ 빠른 해결 방법 (3단계)

### 1단계: Render에 백엔드 배포

1. **Render 가입**
   - https://render.com 접속
   - GitHub 계정으로 로그인

2. **새 Web Service 생성**
   - Dashboard → "New +" → "Web Service"
   - GitHub 저장소: `jerry4110/Memo-app-login` 선택
   - 다음 설정:

   ```
   Name: memo-app-backend
   Region: Singapore
   Branch: main
   Root Directory: server
   Runtime: Node
   Build Command: cd server && npm install
   Start Command: node server.js
   ```

3. **환경 변수 추가**
   ```
   JWT_SECRET = your-super-secret-key-12345
   PORT = 10000
   ```

4. **배포 완료 후 URL 복사**
   - 예: `https://memo-app-backend.onrender.com`
   - 이 URL을 다음 단계에서 사용합니다!

### 2단계: Vercel에 환경 변수 설정

1. **Vercel 프로젝트 설정**
   - https://vercel.com/dashboard 접속
   - `Memo-app-login` 프로젝트 선택
   - Settings → Environment Variables

2. **환경 변수 추가**
   ```
   Key: VITE_API_URL
   Value: https://memo-app-backend.onrender.com/api
   ```
   - Production, Preview, Development 모두 체크
   - Save

3. **재배포**
   - Deployments 탭
   - 최신 배포 옆 "..." → "Redeploy"

### 3단계: 확인

1. Vercel URL로 접속
2. 회원가입 시도
3. 성공! 🎉

## 📱 모바일에서 테스트

- Vercel URL을 모바일 브라우저에서 열기
- 회원가입/로그인 테스트
- 이제 정상 작동합니다!

## ⚠️ 주의사항

Render 무료 플랜은:
- 15분 동안 요청이 없으면 서버가 sleep
- 첫 요청 시 30초 정도 지연될 수 있음
- 해결: UptimeRobot으로 5분마다 ping 보내기

## 🆘 문제 발생 시

1. Render 대시보드에서 로그 확인
2. Vercel 환경 변수가 올바르게 설정되었는지 확인
3. 브라우저 개발자 도구(F12)에서 Network 탭 확인

