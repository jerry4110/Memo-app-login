# 📝 메모 앱 (Memo App)

React + Vite로 만든 간단하고 깔끔한 메모 애플리케이션입니다.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwind-css)

## ✨ 주요 기능

- ✅ 메모 생성, 수정, 삭제
- 🔍 실시간 검색 기능
- 💾 로컬 스토리지 자동 저장
- 📱 반응형 디자인 (모바일 지원)
- 🎨 깔끔한 TailwindCSS UI
- ⚡ 빠른 Vite 빌드

## 🚀 빠른 시작

### 개발 환경 설정

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 http://localhost:5173 접속
```

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 📦 배포

### 무료 배포 가이드

이 앱을 무료로 배포하는 방법은 다음 문서를 참고하세요:

- **🚀 빠른 배포 (5분)**: [QUICK_START.md](./QUICK_START.md)
- **📖 상세 가이드**: [DEPLOYMENT.md](./DEPLOYMENT.md)

#### 추천 배포 플랫폼

1. **Vercel** (가장 쉬움 ⭐)
   - GitHub 연동만으로 자동 배포
   - HTTPS 자동 제공
   - 전세계 CDN

2. **Netlify**
   - 드래그 앤 드롭 배포
   - 폼 기능 지원

3. **GitHub Pages**
   - GitHub과 완벽 통합
   - 무제한 대역폭

4. **Cloudflare Pages**
   - 최고 성능
   - 빠른 CDN

## 📁 프로젝트 구조

```
cursorstudy/
├── src/
│   ├── App.jsx          # 메인 앱 컴포넌트
│   ├── main.jsx         # 진입점
│   └── App.css          # 스타일
├── public/              # 정적 파일
├── index.html           # HTML 템플릿
├── vite.config.js       # Vite 설정
├── vercel.json          # Vercel 배포 설정
├── netlify.toml         # Netlify 배포 설정
└── package.json         # 프로젝트 정보
```

## 🛠️ 기술 스택

- **React 18.2.0** - UI 라이브러리
- **Vite 5.0.8** - 빌드 도구
- **TailwindCSS** - 유틸리티 CSS 프레임워크 (CDN)
- **LocalStorage** - 데이터 저장소

## 💡 사용법

1. **새 메모 만들기**
   - 상단의 "새 메모" 버튼 클릭
   - 제목과 내용 입력
   - "저장" 버튼 클릭

2. **메모 검색**
   - 상단 검색창에 키워드 입력
   - 제목 또는 내용에서 실시간 검색

3. **메모 수정/삭제**
   - 메모 카드의 "수정" 버튼 클릭
   - 내용 변경 후 "저장"
   - "삭제" 버튼으로 메모 삭제

## 🔧 커스터마이징

### 색상 변경

`src/App.jsx`에서 TailwindCSS 클래스를 수정하세요:

```jsx
// 예: 배경색 변경
<div className="min-h-screen bg-slate-100">  // bg-slate-100을 다른 색으로 변경

// 예: 버튼 색상 변경
<button className="bg-rose-500 hover:bg-rose-600">  // rose를 다른 색으로 변경
```

### 기능 추가 아이디어

- [ ] 카테고리/태그 기능
- [ ] 메모 색상 변경
- [ ] 메모 정렬 옵션
- [ ] 다크 모드
- [ ] 메모 내보내기/가져오기
- [ ] 백업 기능 (클라우드)

## 📝 라이선스

이 프로젝트는 자유롭게 사용, 수정, 배포 가능합니다.

## 🤝 기여

버그 리포트나 기능 제안은 이슈로 등록해주세요!

## 📚 관련 문서

- [React 공식 문서](https://react.dev)
- [Vite 공식 문서](https://vitejs.dev)
- [TailwindCSS 공식 문서](https://tailwindcss.com)

---

**만든이**: 메모 앱으로 더 효율적인 일상을 시작하세요! 🎉

