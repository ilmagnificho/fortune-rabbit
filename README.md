# 🐰 운세토끼 - AI 다국어 운세 서비스

4개 언어 지원 + 광고 수익화 모델의 완성형 운세 서비스

---

## 📥 먼저! 파일 다운로드

### 파일은 어디에?
**이 문서를 보고 있다면, 파일은 이미 컴퓨터에 있습니다!**

```
Windows: 내 PC → 다운로드 → fortune-rabbit 폴더
Mac: Finder → 다운로드 → fortune-rabbit 폴더
```

**파일이 안 보이나요?** 
→ [파일위치안내.md](./파일위치안내.md) 참고

---

## 🎯 시작하기 (선택하세요!)

### 🌐 웹 브라우저만 사용 (초강추!) ⭐⭐⭐⭐⭐
**[📖 GITHUB_WEB_GUIDE.md 보기 →](./GITHUB_WEB_GUIDE.md)**
```
✅ CMD/Terminal 필요 없음
✅ 클릭만으로 완료
✅ 30분 안에 배포
✅ 프로그램 설치 불필요
```
**→ 코딩 몰라도 OK! 가장 쉬운 방법!**

### 💻 명령어 사용 (개발자용)
**[📖 DEPLOY_GUIDE.md 보기 →](./DEPLOY_GUIDE.md)**
```
✅ Git, Node.js 사용
✅ 명령어로 배포
✅ 15분 안에 완료
```

**→ 뭘 선택해야 할지 모르겠다면? [QUICKSTART.md 보기](./QUICKSTART.md)**

---

## 🎯 개발 몰라도 OK!

**[📖 초보자를 위한 배포 가이드 보기 →](./DEPLOY_GUIDE.md)**

코딩을 전혀 몰라도 1시간 안에 실제 서비스를 오픈할 수 있습니다!

---

## ✨ 운세토끼란?

생년월일만 입력하면 AI가 오늘의 운세를 알려주는 서비스입니다.

### 핵심 기능
- 🌏 **4개 언어 지원**: 한국어, English, 日本語, 中文
- 🤖 **AI 개인화**: OpenAI GPT-4 기반 맞춤 운세
- 💰 **광고 수익화**: Google AdSense 통합
- 📱 **모바일 최적화**: 완벽한 반응형 디자인
- 🔓 **상세보기**: 광고 시청으로 잠금 해제

---

## 🚀 5분 빠른 시작

### 방법 1: 웹 브라우저만 사용 (가장 쉬움!) ⭐
**→ [GITHUB_WEB_GUIDE.md](./GITHUB_WEB_GUIDE.md) 보기**
- ✅ CMD/Terminal 필요 없음
- ✅ 클릭만으로 완료
- ✅ 30분 안에 배포
- ✅ 코딩 지식 불필요

### 방법 2: 명령어 사용 (개발자용)

#### 1. 파일 준비
```bash
# public 폴더 생성
mkdir public

# HTML 파일 복사
cp fortune-final.html public/index.html
```

### 2. 환경 설정
```bash
# 패키지 설치
npm install

# 환경 변수 설정
cp .env.example .env
# .env 파일에 OpenAI API 키 입력
```

### 3. 서버 실행
```bash
node server-final.js
```

### 4. 브라우저 접속
```
http://localhost:3000
```

---

## 📦 포함된 파일

### 핵심 파일 ⭐
```
fortune-final.html    - 완전한 프론트엔드 (다국어 + 광고)
server-final.js       - 백엔드 서버 (다국어 API)
DEPLOY_GUIDE.md       - 초보자를 위한 완벽 배포 가이드
```

### 설정 파일
```
package.json          - Node.js 의존성
vercel.json          - Vercel 배포 설정
.env.example         - 환경 변수 템플릿
```

### 문서
```
README.md            - 이 파일
START_HERE.md        - 빠른 시작 가이드
README-FINAL.md      - 상세 기술 문서
VERSION_GUIDE.md     - 버전 비교
```

---

## 💰 수익 모델

### 광고 전용 수익화
```
입력 화면 → 배너 광고 #1
결과 화면 → 네이티브 광고 #2
상세보기 → 리워드 광고 #3 (핵심!)
```

### 예상 수익
```
DAU 1,000명  → $1,200/월
DAU 5,000명  → $6,000/월
DAU 10,000명 → $12,000/월
```

---

## 🌏 다국어 지원

### 자동 언어 감지
- 한국 접속 → 한국어
- 일본 접속 → 日本語
- 중국 접속 → 中文
- 기타 지역 → English

### 수동 전환
- 우측 상단 🌏 버튼
- 4개 언어 즉시 전환

---

## 🎯 시장 규모

### 20억 잠재 고객
```
🇰🇷 한국: 5,100만
🇯🇵 일본: 1억 2,500만
🇨🇳 중국: 14억
🇺🇸 영미권: 5억+
```

---

## 📱 배포 방법

### 🥇 추천: 웹 브라우저만 사용
**→ [GITHUB_WEB_GUIDE.md](./GITHUB_WEB_GUIDE.md)**
- CMD/Terminal 없이 클릭만으로!
- 가장 쉽고 빠른 방법
- 코딩 지식 전혀 불필요
- 30분이면 완료

### 🥈 대안: 명령어 사용 (Vercel CLI)
**개발 경험 있는 분만**
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel

# 환경 변수 설정
vercel env add OPENAI_API_KEY
```

---

## 🔧 API 키 발급

### OpenAI API
```
1. https://platform.openai.com 접속
2. API Keys 메뉴
3. Create new secret key
4. 키 복사 후 .env에 저장
```

💡 **비용**: 1회 운세 약 $0.002 (하루 100명 = $0.20)

---

## 📊 성장 로드맵

### Week 1: 런칭
- ✅ 배포 완료
- ✅ Google AdSense 신청
- ✅ 베타 테스트

### Week 2-4: 마케팅
- 각 언어별 SNS 계정
- 인플루언서 협업
- 커뮤니티 마케팅

### Month 2-3: 최적화
- 광고 A/B 테스트
- 전환율 개선
- AI 프롬프트 최적화

### Month 6: 성장
- DAU 10,000+
- 월 수익 $10,000+
- 모바일 앱 검토

---

## 💡 성공 팁

### 1. 트래픽 늘리기
```
✅ 매일 SNS 포스팅
✅ 해시태그 활용
✅ 친구 추천 이벤트
```

### 2. 광고 최적화
```
✅ 리워드 광고 우선
✅ A/B 테스트
✅ 사용자 경험 유지
```

### 3. 다국어 활용
```
✅ 각 언어별 마케팅
✅ 로컬 인플루언서
✅ 문화적 맞춤화
```

---

## 🆘 문제 해결

### API 오류
```
→ Vercel 환경 변수 확인
→ OpenAI 크레딧 잔액 확인
→ API 키 재발급
```

### 배포 실패
```
→ vercel.json 설정 확인
→ package.json 확인
→ public 폴더에 index.html 있는지 확인
```

### 광고 안 나옴
```
→ AdSense 승인 대기 중 (1-2주)
→ 광고 코드 올바르게 삽입했는지 확인
→ 24시간 후 다시 확인
```

---

## 📚 더 알아보기

- **초보자**: [DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md)
- **빠른 시작**: [START_HERE.md](./START_HERE.md)
- **상세 문서**: [README-FINAL.md](./README-FINAL.md)
- **버전 비교**: [VERSION_GUIDE.md](./VERSION_GUIDE.md)

---

## 📄 라이선스

MIT License - 자유롭게 사용하세요!

---

## 🎊 시작하기

```bash
# 1. 초보자
DEPLOY_GUIDE.md 파일을 열어서 따라하기

# 2. 개발자
npm install
node server-final.js
```

**목표: 3개월 안에 월 $10,000 수익!** 💰

운세토끼와 함께 성공하세요! 🐰✨