# 🚀 빠른 배포 가이드 (5분 완성!)

## 1단계: GitHub에 업로드 (2분)

### 새 저장소 만들기
1. https://github.com/new 접속
2. 저장소 이름 입력 (예: `memo-app`)
3. "Create repository" 클릭

### 코드 업로드
```bash
# Git 초기화 (이미 되어있다면 생략)
git init

# 모든 파일 추가
git add .

# 커밋
git commit -m "Initial commit: 메모 앱"

# GitHub 연결 (저장소 URL을 본인의 것으로 변경!)
git remote add origin https://github.com/사용자명/저장소명.git

# 푸시
git branch -M main
git push -u origin main
```

**또는 GitHub Desktop이나 VS Code의 Git 기능 사용 가능!**

---

## 2단계: Vercel 배포 (3분)

### 방법 1: 웹사이트 사용 (추천 ⭐)

1. **Vercel 가입**
   - https://vercel.com 접속
   - "Sign Up" 클릭
   - GitHub 계정으로 로그인 (가장 쉬움)

2. **프로젝트 배포**
   - 대시보드에서 "Add New Project" 클릭
   - 방금 만든 GitHub 저장소 선택
   - "Import" 클릭

3. **설정 확인**
   - Framework Preset: **Vite** (자동 감지됨)
   - Build Command: `npm run build` (자동)
   - Output Directory: `dist` (자동)
   - Root Directory: `./` (그대로)

4. **배포 시작**
   - "Deploy" 버튼 클릭
   - 1-2분 대기
   - ✅ 완료! URL이 생성됨

5. **결과**
   - 예: `https://memo-app-xxx.vercel.app`
   - 이제 어디서든 접속 가능!

### 방법 2: CLI 사용

```bash
# Vercel CLI 설치
npm install -g vercel

# 배포
vercel

# 질문에 답변:
# - Set up and deploy? → Yes
# - Which scope? → 계정 선택
# - Link to existing project? → No
# - What's your project's name? → memo-app
# - In which directory is your code located? → ./

# 완료! URL 제공됨
```

---

## 3단계: 확인 및 커스터마이징 (선택)

### 커스텀 도메인 연결
1. Vercel 프로젝트 설정 → Domains
2. 원하는 도메인 입력
3. DNS 설정 안내 따르기

### 자동 재배포
- GitHub에 코드를 푸시하면 자동으로 재배포됩니다!
- 별도 작업 불필요

### 환경 변수 설정 (필요시)
- Vercel 프로젝트 설정 → Environment Variables
- 변수 추가 후 재배포

---

## 🎉 완료!

이제 전 세계 누구나 접속할 수 있는 메모 앱이 완성되었습니다!

### 배포 URL 확인
- Vercel 대시보드에서 확인 가능
- 여러 환경(프리뷰, 프로덕션) 자동 관리

### 다음 할 일
- [ ] 메모 앱 테스트
- [ ] 친구들에게 공유
- [ ] 커스텀 도메인 연결 (선택)
- [ ] 기능 추가 후 자동 재배포 확인

---

## 💡 팁

1. **빌드 오류가 나면?**
   - Vercel 대시보드에서 로그 확인
   - 로컬에서 `npm run build` 테스트

2. **이미지가 안 보이면?**
   - `public/Images/` 경로 확인
   - Vite에서는 `public`이 루트 경로

3. **더 많은 옵션이 필요하면?**
   - `DEPLOYMENT.md` 파일 참고
   - 다른 플랫폼 옵션 확인

---

**문제가 있으면?**
- Vercel 문서: https://vercel.com/docs
- GitHub Issues 생성
- DEPLOYMENT.md의 문제 해결 섹션 참고

