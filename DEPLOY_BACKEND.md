# 백엔드 배포 가이드

메모 앱의 백엔드를 Render에 무료로 배포하는 방법입니다.

## 🚀 Render로 백엔드 배포 (5분)

### 1단계: GitHub에 코드 푸시 확인
- 현재 코드가 `https://github.com/jerry4110/Memo-app-login`에 업로드되어 있는지 확인

### 2단계: Render에서 Web Service 생성

1. **Render 가입**
   - https://render.com 접속
   - "Get Started for Free" 클릭
   - GitHub 계정으로 로그인

2. **새 Web Service 생성**
   - Dashboard에서 "New +" → "Web Service" 선택
   - GitHub 저장소 선택: `jerry4110/Memo-app-login`
   - 연결 후 다음 설정:

   **기본 설정:**
   - **Name**: `memo-app-login-backend` (원하는 이름)
   - **Region**: Singapore (또는 가장 가까운 지역)
   - **Branch**: `main`
   - **Root Directory**: `server` (백엔드 폴더)

   **빌드 및 실행:**
   - **Runtime**: `Node`
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `node server.js`

   **환경 변수:**
   - `JWT_SECRET`: 임의의 긴 문자열 (예: `your-super-secret-jwt-key-change-this`)
   - `PORT`: `10000` (Render의 기본 포트)

3. **배포**
   - "Create Web Service" 클릭
   - 약 2-3분 대기

4. **URL 확인**
   - 배포 완료 후 URL이 생성됨
   - 예: `https://memo-app-login-backend.onrender.com`

### 3단계: 프론트엔드 환경 변수 업데이트

Render 배포 URL을 Vercel 환경 변수로 설정:

1. **Vercel 프로젝트 설정**
   - https://vercel.com/dashboard
   - 프로젝트 선택
   - Settings → Environment Variables

2. **환경 변수 추가**
   - **Key**: `VITE_API_URL`
   - **Value**: `https://memo-app-login-backend.onrender.com/api`
   - **Environment**: Production, Preview, Development 모두 선택
   - Save

3. **재배포**
   - Deployments 탭
   - 최신 배포 옆 "..." → "Redeploy"

### 4단계: CORS 설정 확인

Render 배포 URL을 `server/server.js`의 CORS 설정에 추가:

```javascript
app.use(cors({
  origin: [
    'https://memo-app-login.vercel.app',
    'http://localhost:5173'
  ]
}))
```

이 변경사항을 커밋하고 푸시하면 자동 재배포됩니다.

## 🔄 대안: Railway로 배포

Railway도 무료 플랫폼입니다:

1. https://railway.app 접속
2. "New Project" → "Deploy from GitHub repo"
3. 저장소 선택
4. 자동으로 설정 감지
5. 환경 변수 설정 후 배포

## 📝 주의사항

1. **무료 플랜 제한**
   - Render: 15분 동안 요청이 없으면 서버가 sleep 모드로 전환
   - 첫 요청 시 약 30초 정도 지연될 수 있음

2. **해결 방법**
   - UptimeRobot 같은 서비스로 5분마다 ping 보내기
   - 또는 Railway의 무료 플랜 사용 (더 안정적)

## ✅ 완료 확인

배포 완료 후:
- Render URL로 접속: `https://memo-app-login-backend.onrender.com`
- "Memo App API Server" 메시지가 보이면 성공!

