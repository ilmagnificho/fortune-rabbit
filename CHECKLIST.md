# ✅ 배포 전 최종 체크리스트

## 📦 파일 구조 확인

```
fortune-rabbit/
├── public/
│   └── index.html          ✅ fortune-final.html 복사본
├── server-final.js         ✅ 서버 코드
├── package.json            ✅ 의존성 설정
├── vercel.json            ✅ Vercel 배포 설정
├── .env.example           ✅ 환경 변수 예시
├── DEPLOY_GUIDE.md        ✅ 초보자 가이드
├── README.md              ✅ 메인 문서
└── START_HERE.md          ✅ 빠른 시작
```

---

## 🎯 배포 전 체크리스트

### 1단계: 필수 준비물
- [ ] OpenAI API 키 발급 완료
- [ ] GitHub 계정 생성 완료
- [ ] Git 설치 완료
- [ ] Node.js 설치 완료

### 2단계: 로컬 테스트
```bash
# 1. 의존성 설치
npm install

# 2. 환경 변수 설정
cp .env.example .env
# .env 파일 열어서 OpenAI API 키 입력

# 3. 서버 실행
node server-final.js

# 4. 브라우저 테스트
# http://localhost:3000 접속
```

- [ ] 서버 정상 시작됨
- [ ] 사이트 접속됨
- [ ] 4개 언어 전환 작동
- [ ] 운세 보기 작동
- [ ] 상세보기 잠금/해제 작동

### 3단계: GitHub 업로드
```bash
# 1. Git 초기화
git init
git add .
git commit -m "운세토끼 초기 버전"

# 2. GitHub 연결
git remote add origin https://github.com/본인계정/fortune-rabbit.git
git branch -M main
git push -u origin main
```

- [ ] GitHub에 코드 업로드 완료
- [ ] 모든 파일 정상적으로 올라감

### 4단계: Vercel 배포
```
1. https://vercel.com 접속
2. GitHub 계정으로 로그인
3. Import Project
4. fortune-rabbit 선택
5. 환경 변수 설정:
   - Name: OPENAI_API_KEY
   - Value: sk-... (본인 키)
6. Deploy 버튼 클릭
```

- [ ] Vercel 배포 성공
- [ ] 배포된 URL 확인 (예: https://fortune-rabbit-xxx.vercel.app)
- [ ] 배포된 사이트 접속 확인
- [ ] 운세 조회 정상 작동

### 5단계: Google AdSense
```
1. https://www.google.com/adsense 접속
2. 사이트 등록
3. AdSense 코드 복사
4. fortune-final.html 수정
5. GitHub에 push
6. Vercel 자동 재배포 확인
```

- [ ] AdSense 신청 완료
- [ ] 광고 코드 삽입 완료
- [ ] 승인 대기 중

---

## 🔍 상세 체크

### 브랜드 일관성 확인
- [ ] 모든 페이지에 "운세토끼" 표시
- [ ] 한국어: "운세토끼"
- [ ] 영어: "Fortune Rabbit"
- [ ] 일본어: "運勢うさぎ"
- [ ] 중국어: "运势兔"

### 기능 확인
- [ ] 언어 자동 감지 작동
- [ ] 언어 수동 전환 작동
- [ ] 운세 점수 표시
- [ ] 별점 표시
- [ ] 상세보기 잠금/해제
- [ ] 광고 시청 시뮬레이션
- [ ] 공유 버튼 작동

### 모바일 확인
- [ ] iPhone에서 테스트
- [ ] Android에서 테스트
- [ ] 터치 인터페이스 정상
- [ ] 화면 크기 자동 조절

### SEO 확인
- [ ] 페이지 제목 올바름
- [ ] 메타 설명 올바름
- [ ] OG 태그 설정됨
- [ ] 파비콘 있음 (선택)

---

## 🚨 흔한 실수 체크

### ❌ 이것만은 피하세요!

1. **API 키를 GitHub에 올림**
   ```
   ❌ .env 파일을 git에 추가
   ✅ .env.example만 추가, .env는 .gitignore
   ```

2. **public 폴더 없음**
   ```
   ❌ fortune-final.html만 있음
   ✅ public/index.html로 복사 필요
   ```

3. **환경 변수 설정 안 함**
   ```
   ❌ Vercel에 OPENAI_API_KEY 설정 안 함
   ✅ Settings → Environment Variables에서 설정
   ```

4. **광고 코드 잘못 삽입**
   ```
   ❌ ca-pub-YOUR-ID 그대로 둠
   ✅ 본인의 AdSense ID로 변경
   ```

---

## 💡 배포 후 해야 할 일

### 즉시 (오늘)
- [ ] 친구 10명에게 공유
- [ ] SNS에 첫 포스팅
- [ ] Google Analytics 설정 (선택)

### 1주일 내
- [ ] AdSense 승인 확인
- [ ] 트래픽 분석 시작
- [ ] 첫 수익 확인

### 1개월 내
- [ ] 마케팅 본격화
- [ ] A/B 테스트 시작
- [ ] 사용자 피드백 수집

---

## 🎊 모두 체크했나요?

### 모든 항목에 ✅ 표시했다면:

**🎉 축하합니다! 배포 준비 완료!**

이제 [DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md)를 따라 배포하세요!

---

## 📞 문제 발생 시

### 자주 묻는 질문

**Q: npm install이 안 돼요**
```bash
# Node.js 버전 확인
node --version
# 18.0.0 이상이어야 함

# 캐시 삭제 후 재시도
npm cache clean --force
npm install
```

**Q: git push가 안 돼요**
```bash
# GitHub 토큰 필요 (2021년 이후)
# Settings → Developer settings → Personal access tokens
# 토큰 생성 후 비밀번호 대신 사용
```

**Q: Vercel 배포가 실패해요**
```
1. 배포 로그 확인
2. vercel.json 파일 있는지 확인
3. public 폴더에 index.html 있는지 확인
4. package.json 파일 확인
```

**Q: 운세가 안 나와요**
```
1. Vercel 환경 변수 확인
2. OpenAI API 크레딧 확인
3. 브라우저 콘솔 (F12) 에러 확인
```

---

## 🚀 배포 시작!

모든 준비가 끝났습니다!

**다음 단계:**
1. [DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md) 열기
2. 단계별로 따라하기
3. 1시간 후 실제 서비스 오픈!

**화이팅!** 🐰✨