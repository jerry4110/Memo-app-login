# 메모 앱 배포 가이드

React + Vite로 만든 메모 앱을 무료로 배포하는 방법입니다.

## 🚀 배포 옵션 비교

| 플랫폼 | 난이도 | 속도 | 특징 |
|--------|--------|------|------|
| **Vercel** | ⭐ 쉬움 | ⚡ 매우 빠름 | React/Vite 최적화, 자동 HTTPS |
| **Netlify** | ⭐ 쉬움 | ⚡ 매우 빠름 | 드래그 앤 드롭 지원, 폼 기능 |
| **GitHub Pages** | ⭐⭐ 보통 | ⚡ 빠름 | GitHub 통합, 무제한 대역폭 |
| **Cloudflare Pages** | ⭐⭐ 보통 | ⚡ 매우 빠름 | 전세계 CDN, 무제한 대역폭 |

---

## 방법 1: Vercel로 배포 (가장 쉬움 ⭐ 추천)

### 1-1. GitHub에 코드 업로드

1. GitHub에 새 저장소 생성
2. 프로젝트를 Git으로 초기화하고 푸시:

```bash
git init
git add .
git commit -m "Initial commit: 메모 앱"
git branch -M main
git remote add origin https://github.com/사용자명/저장소명.git
git push -u origin main
```

### 1-2. Vercel 배포

**방법 A: Vercel 웹사이트 사용**
1. https://vercel.com 접속 후 GitHub 계정으로 로그인
2. "Add New Project" 클릭
3. GitHub 저장소 선택
4. 자동으로 설정 감지됨:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. "Deploy" 버튼 클릭
6. 약 1-2분 후 배포 완료!

**방법 B: Vercel CLI 사용**
```bash
# Vercel CLI 설치
npm install -g vercel

# 프로젝트 폴더에서 실행
vercel

# 대화형 질문에 답변:
# - Set up and deploy? Yes
# - Which scope? (계정 선택)
# - Link to existing project? No
# - Project name? (원하는 이름 입력)
# - Directory? ./
# - Override settings? No

# 배포 완료 후 자동으로 URL 제공됨!
```

### 1-3. 자동 배포 설정
- GitHub에 코드를 푸시하면 자동으로 재배포됨
- 커스텀 도메인 연결 가능 (무료)
- 환경 변수 설정 가능

---

## 방법 2: Netlify로 배포

### 2-1. 빌드 파일 생성
```bash
npm run build
```
`dist` 폴더가 생성됩니다.

### 2-2. Netlify 배포

**방법 A: 드래그 앤 드롭**
1. https://app.netlify.com 접속 후 로그인
2. "Add new site" → "Deploy manually"
3. `dist` 폴더를 드래그 앤 드롭
4. 즉시 배포 완료!

**방법 B: GitHub 연동**
1. "Add new site" → "Import an existing project"
2. GitHub 저장소 선택
3. 빌드 설정:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. "Deploy site" 클릭

---

## 방법 3: GitHub Pages로 배포

### 3-1. vite.config.js 수정
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/저장소명/'  // GitHub Pages 경로에 맞게 수정
})
```

### 3-2. GitHub Actions 설정 파일 생성
`.github/workflows/deploy.yml` 파일 생성:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 3-3. GitHub 설정
1. 저장소 Settings → Pages
2. Source: **GitHub Actions** 선택
3. 코드 푸시 시 자동 배포

---

## 방법 4: Cloudflare Pages로 배포

1. https://pages.cloudflare.com 접속
2. GitHub 계정 연동
3. 저장소 선택
4. 빌드 설정:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
5. "Save and Deploy" 클릭

---

## 🔧 배포 전 체크리스트

- [ ] `npm run build` 명령이 오류 없이 실행되는지 확인
- [ ] `dist` 폴더가 생성되는지 확인
- [ ] 로컬에서 `npm run preview`로 빌드 결과 확인
- [ ] 환경 변수가 있다면 배포 플랫폼에서 설정
- [ ] 이미지 경로가 올바른지 확인 (`/Images/` → `public/Images/`)

---

## 💡 배포 후 확인사항

1. **HTTPS 자동 적용**: 모든 플랫폼이 자동으로 HTTPS 제공
2. **빠른 로딩**: CDN을 통한 전세계 빠른 접속
3. **자동 재배포**: Git 푸시 시 자동 업데이트
4. **커스텀 도메인**: 무료로 도메인 연결 가능

---

## 🆘 문제 해결

### 빌드 오류
```bash
# node_modules 재설치
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 이미지가 안 보일 때
- `public/Images/` 경로 확인
- Vite에서는 `public` 폴더가 루트로 서빙됨

### 라우팅 오류 (SPA)
- Vercel/Netlify: `vercel.json` 또는 `netlify.toml` 설정
- GitHub Pages: 404.html 추가 필요

---

## 📝 추천 순서

1. **처음 배포**: Vercel (가장 쉬움, 자동 설정)
2. **간단한 드래그 앤 드롭**: Netlify
3. **GitHub 통합**: GitHub Pages
4. **최고 성능**: Cloudflare Pages

---

## 🎉 배포 성공!

배포가 완료되면 다음과 같은 URL이 제공됩니다:
- Vercel: `https://프로젝트명.vercel.app`
- Netlify: `https://랜덤이름.netlify.app`
- GitHub Pages: `https://사용자명.github.io/저장소명`
- Cloudflare: `https://프로젝트명.pages.dev`

축하합니다! 🎊

