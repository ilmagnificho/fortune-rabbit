# 📤 GitHub 수동 업로드 가이드

> 웹 브라우저만 사용해서 파일 업로드하기 (CMD/Terminal 불필요!)

---

## 📦 준비물

**[github-upload.zip](computer:///mnt/user-data/outputs/github-upload.zip)** ⬅️ 이 파일 다운로드!

포함된 파일:
```
✅ public/index.html       # 프론트엔드
✅ server-final.js         # 백엔드
✅ package.json           # 의존성
✅ vercel.json           # 배포 설정
✅ .env.example          # 환경 변수 예시
✅ .gitignore           # Git 설정
✅ README.md            # 프로젝트 설명
```

---

## 🚀 업로드 방법 (5분!)

### Step 1: ZIP 파일 압축 해제

```
Windows:
1. github-upload.zip 우클릭
2. "압축 풀기" 또는 "Extract All" 클릭
3. 압축 풀기!

Mac:
1. github-upload.zip 더블클릭
2. 자동으로 압축 해제됨!
```

압축 해제 후 폴더 구조:
```
github-upload/
├── public/
│   └── index.html
├── .env.example
├── .gitignore  
├── package.json
├── README.md
├── server-final.js
└── vercel.json
```

---

### Step 2: GitHub에서 새 저장소 만들기

```
1. https://github.com 접속
2. 우측 상단 "+" → "New repository" 클릭
3. Repository name: fortune-rabbit (또는 원하는 이름)
4. Public 선택
5. "Add a README file" 체크 안 함 (우리가 업로드할 거니까!)
6. "Create repository" 클릭
```

---

### Step 3: 파일 업로드

#### 방법 1: 드래그 앤 드롭 (가장 쉬움!) ⭐

```
1. GitHub 저장소 페이지에서
2. "uploading an existing file" 링크 클릭
   (또는 "Add file" → "Upload files" 클릭)

3. github-upload 폴더 안의 모든 파일과 폴더를 
   드래그해서 GitHub 페이지에 드롭!
   
   드래그할 파일들:
   - public 폴더
   - .env.example
   - .gitignore
   - package.json
   - README.md
   - server-final.js
   - vercel.json

4. Commit changes:
   - Commit message: "Initial commit - 운세토끼"
   - "Commit changes" 버튼 클릭
```

#### 방법 2: 파일별 업로드

**만약 드래그가 안 되면:**

```
1. "Add file" → "Create new file" 클릭

2. 파일명 입력: package.json
3. 내용 복사 붙여넣기
4. "Commit new file" 클릭

5. 위 과정을 각 파일마다 반복:
   - .env.example
   - .gitignore
   - README.md
   - server-final.js
   - vercel.json
   - public/index.html (폴더 경로 포함!)
```

**public/index.html 업로드하는 법:**
```
1. "Add file" → "Create new file" 클릭
2. 파일명에 "public/index.html" 입력
   (public/ 을 입력하면 자동으로 폴더 생성됨!)
3. index.html 내용 붙여넣기
4. Commit!
```

---

### Step 4: 업로드 확인

```
GitHub 저장소에서 확인:

✅ public/
   ✅ index.html
✅ .env.example
✅ .gitignore
✅ package.json
✅ README.md
✅ server-final.js
✅ vercel.json

모두 있으면 성공! 🎉
```

---

## 🚀 Vercel 배포

### Step 1: Vercel 연결

```
1. https://vercel.com 접속
2. "Sign Up" → "Continue with GitHub" 클릭
3. GitHub 계정으로 로그인
4. 권한 승인
```

### Step 2: 프로젝트 Import

```
1. Vercel 대시보드에서 "Add New..." → "Project" 클릭
2. "Import Git Repository" 섹션에서
3. "fortune-rabbit" 저장소 찾기
4. "Import" 클릭
```

### Step 3: 설정

```
Framework Preset: Other (자동 선택됨)
Build Command: (비워두기)
Output Directory: public
Install Command: npm install (자동)

위 설정 그대로 두고...
```

### Step 4: 환경 변수 추가 ⚠️ 중요!

```
Environment Variables 섹션에서:

Name:  OPENAI_API_KEY
Value: sk-proj-your-openai-key-here
       (본인의 OpenAI API 키 입력!)

"Add" 버튼 클릭
```

### Step 5: 배포!

```
1. "Deploy" 버튼 클릭
2. 2-3분 기다리기 ☕
3. 성공 메시지 나타남!
4. 배포 URL 받기
   예: https://fortune-rabbit-abc123.vercel.app
```

---

## 🎉 배포 완료! 테스트하기

### 1. 사이트 접속

```
Vercel이 준 URL로 접속:
https://fortune-rabbit-abc123.vercel.app
```

### 2. 기능 테스트

```
✅ 사이트 열림
✅ 언어 변경 (🌏 버튼)
✅ 생년월일 입력
✅ 운세 보기 클릭
✅ 결과 표시
✅ 상세보기 클릭
✅ 모달 열림
```

### 3. 모바일 테스트

```
1. 휴대폰으로 URL 접속
2. 모든 기능 작동 확인
```

---

## 💰 Google AdSense 추가

### Step 1: AdSense 신청

```
1. https://www.google.com/adsense 접속
2. "시작하기" 클릭
3. Vercel URL 입력:
   fortune-rabbit-abc123.vercel.app
4. 개인정보 입력
5. 승인 대기 (1-2주)
```

### Step 2: 광고 코드 받기

```
승인되면:
1. AdSense → 광고 → 광고 단위
2. "디스플레이 광고" 선택
3. 광고 코드 복사
```

### Step 3: 코드 삽입

**GitHub에서 수정:**

```
1. GitHub 저장소 → public/index.html 클릭
2. 연필 아이콘(✏️) 클릭 (Edit)
3. 파일 내용에서 "TODO" 검색
4. ca-pub-XXXXXXXXXXXXXXXX 를
   본인의 AdSense 게시자 ID로 교체
5. data-ad-slot="1111111111" 을
   본인의 광고 단위 ID로 교체
6. "Commit changes" 클릭
```

### Step 4: 자동 재배포

```
Vercel이 자동으로 감지해서 재배포!
1-2분 후 새 버전 배포 완료
```

---

## 🔧 문제 해결

### Q: 파일이 안 올라가요!

**폴더 구조 확인:**
```
✅ public/index.html (폴더 안에!)
✅ server-final.js (루트에!)
✅ package.json (루트에!)

❌ github-upload/public/index.html (X)
```

### Q: Vercel 배포가 실패해요!

**체크리스트:**
```
1. vercel.json 파일 있나요?
2. package.json 파일 있나요?
3. public/index.html 파일 있나요?
4. 환경 변수 OPENAI_API_KEY 설정했나요?
```

### Q: 운세가 안 나와요!

**확인 사항:**
```
1. Vercel → Settings → Environment Variables
2. OPENAI_API_KEY 확인
3. 값이 sk-로 시작하는지 확인
4. OpenAI 크레딧 잔액 확인
   (https://platform.openai.com/account/billing)
```

### Q: 광고가 안 나와요!

**정상입니다!**
```
AdSense 승인 전: 빈 공간 (정상)
승인 후 24시간: 광고 로딩 중
승인 후 48시간 후: 광고 표시 시작
```

---

## 📝 파일별 설명

### public/index.html
```
- 프론트엔드 전체
- 4개 언어 UI
- Google AdSense 광고 영역
- 다국어 자동 감지
```

### server-final.js
```
- Node.js 백엔드 서버
- OpenAI API 연동
- 다국어 운세 생성
- API 엔드포인트
```

### package.json
```
- npm 의존성 목록
- express, cors, dotenv
- 실행 스크립트
```

### vercel.json
```
- Vercel 배포 설정
- 라우팅 규칙
- 빌드 설정
```

### .env.example
```
- 환경 변수 템플릿
- OPENAI_API_KEY 예시
- 로컬 개발용
```

### .gitignore
```
- Git에서 제외할 파일
- node_modules
- .env (보안!)
```

---

## 🎯 다음 단계

### 1. 도메인 연결 (선택)

```
Vercel → Settings → Domains
→ 본인 도메인 추가
→ DNS 설정
→ 완료!
```

### 2. 분석 도구 추가

```
Google Analytics:
1. analytics.google.com 가입
2. 추적 코드 받기
3. public/index.html에 추가
4. 재배포
```

### 3. 마케팅 시작

```
✅ 친구들에게 공유
✅ SNS 포스팅
✅ 커뮤니티 홍보
```

---

## ✅ 최종 체크리스트

**GitHub 업로드:**
- [ ] github-upload.zip 다운로드
- [ ] 압축 해제
- [ ] GitHub 저장소 생성
- [ ] 모든 파일 업로드
- [ ] 파일 구조 확인

**Vercel 배포:**
- [ ] Vercel 가입
- [ ] 프로젝트 Import
- [ ] 환경 변수 설정 (OPENAI_API_KEY)
- [ ] Deploy 클릭
- [ ] 배포 URL 확인

**테스트:**
- [ ] 사이트 접속
- [ ] 운세 조회 테스트
- [ ] 모바일 테스트
- [ ] 언어 전환 테스트

**광고 설정:**
- [ ] AdSense 신청
- [ ] 광고 코드 삽입
- [ ] 재배포
- [ ] 승인 대기

---

**모두 완료했나요?** 🎉

**이제 당신은 실제 서비스를 운영하는 운영자입니다!**

**목표: 3개월 안에 월 $10,000 수익!** 💰

**화이팅!** 🐰✨

---

## 📞 추가 도움이 필요하면?

### 공식 문서
- Vercel: https://vercel.com/docs
- OpenAI: https://platform.openai.com/docs
- AdSense: https://support.google.com/adsense

### 커뮤니티
- GitHub Issues (이 저장소)
- Vercel Discord
- OpenAI Community

---

**간단하죠?** 🚀

**5분이면 배포 완료!** ⚡

**성공을 기원합니다!** 🌟