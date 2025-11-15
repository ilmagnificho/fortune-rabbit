# 🐰 운세토끼 - AI 다국어 운세 서비스

> 4개 언어 지원 + Google AdSense 수익화 모델

---

## 📦 이 저장소에 포함된 파일

```
운세토끼/
├── public/
│   └── index.html          # 프론트엔드 (다국어 + 광고)
├── .env.example           # 환경 변수 예시
├── .gitignore            # Git 무시 파일 목록
├── package.json          # Node.js 의존성
├── server-final.js       # 백엔드 서버
├── vercel.json          # Vercel 배포 설정
└── README.md            # 이 파일
```

---

## 🚀 빠른 시작

### 1. 환경 설정

```bash
# 1. .env 파일 생성
cp .env.example .env

# 2. .env 파일 열어서 OpenAI API 키 입력
# OPENAI_API_KEY=sk-your-key-here
```

### 2. 로컬 테스트

```bash
# 1. 의존성 설치
npm install

# 2. 서버 실행
npm start

# 3. 브라우저에서 확인
# http://localhost:3000
```

### 3. Vercel 배포

#### 방법 1: Vercel 웹사이트에서 (추천) ⭐

```
1. https://vercel.com 접속
2. GitHub 계정으로 로그인
3. "Import Project" 클릭
4. 이 저장소 선택
5. 환경 변수 설정:
   Name: OPENAI_API_KEY
   Value: sk-your-key-here
6. Deploy 클릭!
```

#### 방법 2: Vercel CLI

```bash
# 1. Vercel CLI 설치
npm i -g vercel

# 2. 배포
vercel

# 3. 환경 변수 추가
vercel env add OPENAI_API_KEY
```

---

## 🌏 지원 언어

- 🇰🇷 한국어 (Korean)
- 🇺🇸 영어 (English)  
- 🇯🇵 일본어 (Japanese)
- 🇨🇳 중국어 (Chinese)

**자동 언어 감지**: 사용자의 브라우저 언어를 자동으로 감지합니다.

---

## 💰 Google AdSense 설정

### 1. AdSense 신청

```
1. https://www.google.com/adsense 접속
2. 사이트 등록 (Vercel 배포 URL)
3. 승인 대기 (1-2주)
```

### 2. 광고 코드 삽입

`public/index.html` 파일을 열어서 수정:

```html
<!-- 📝 TODO 항목 찾기 -->
<!-- ca-pub-XXXXXXXXXXXXXXXX를 본인 ID로 교체 -->

<!-- 예시 -->
data-ad-client="ca-pub-2021805347195633"
data-ad-slot="1234567890"
```

### 3. 재배포

```bash
git add public/index.html
git commit -m "AdSense 코드 추가"
git push
```

Vercel이 자동으로 재배포합니다!

---

## 📊 API 엔드포인트

### POST /api/fortune

기본 운세 조회

**Request:**
```json
{
  "birthdate": "1990-01-01",
  "nickname": "행운이",
  "language": "ko"
}
```

**Response:**
```json
{
  "nickname": "행운이",
  "score": 88,
  "stars": 4,
  "rank": 12,
  "love": "최상",
  "money": "상",
  "health": "중상",
  "work": "중",
  "color": "파란색",
  "number": 7,
  "time": "오후 3-5시",
  "advice": "오늘은 긍정적인 마음가짐이 행운을 부릅니다..."
}
```

### POST /api/fortune/detail

상세 운세 조회 (광고 시청 필요)

**Request:**
```json
{
  "birthdate": "1990-01-01",
  "nickname": "행운이",
  "fortuneType": "love",
  "watchedAd": true,
  "language": "ko"
}
```

---

## 🛠 기술 스택

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express
- **AI**: OpenAI GPT-4o-mini
- **Deployment**: Vercel
- **Monetization**: Google AdSense

---

## 📝 환경 변수

`.env` 파일에 다음을 설정하세요:

```env
OPENAI_API_KEY=sk-your-openai-api-key
PORT=3000
NODE_ENV=production
```

---

## 🔧 개발 가이드

### 로컬 개발

```bash
# 개발 모드로 실행
npm run dev

# 서버가 변경사항을 자동으로 감지하려면:
npm install -g nodemon
nodemon server-final.js
```

### 코드 수정

**언어 추가:**
1. `public/index.html`의 `translations` 객체에 언어 추가
2. `server-final.js`의 `languagePrompts` 객체에 언어 추가

**새 기능 추가:**
1. `public/index.html`에 UI 추가
2. `server-final.js`에 API 엔드포인트 추가

---

## 📱 모바일 최적화

- 완벽한 반응형 디자인
- 터치 인터페이스 최적화
- PWA 지원 가능 (추가 개발 필요)

---

## 💡 수익 모델

### 광고 기반 무료 서비스

```
입력 화면: 배너 광고
결과 화면: 네이티브 광고
상세보기: 리워드 광고 (핵심!)
```

### 예상 수익

```
DAU 1,000명  → $1,200/월
DAU 5,000명  → $6,000/월
DAU 10,000명 → $12,000/월
```

---

## 🐛 문제 해결

### Q: "API key error" 오류

**A:** Vercel 환경 변수 확인
```
Settings → Environment Variables → OPENAI_API_KEY
```

### Q: 사이트가 안 열림

**A:** `public/index.html` 파일 확인
```bash
ls -la public/
# index.html이 있어야 함
```

### Q: 광고가 안 나옴

**A:** AdSense 승인 대기 중 (1-2주 소요)

---

## 📄 라이선스

MIT License - 자유롭게 사용하세요!

---

## 🎯 로드맵

- [x] 4개 언어 지원
- [x] Google AdSense 통합
- [x] 반응형 디자인
- [ ] 소셜 로그인
- [ ] 일일 운세 구독
- [ ] 모바일 앱 (React Native)
- [ ] 프리미엄 구독 모델

---

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 문의

- Issues: [GitHub Issues](../../issues)
- Email: your-email@example.com

---

**운세토끼와 함께 성공하세요!** 🐰✨

**목표: 3개월 안에 월 $10,000 수익!** 💰