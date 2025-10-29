# 🚀 개발 몰라도 OK! 운세토끼 배포 완벽 가이드

> 코딩을 전혀 몰라도 따라하면 1시간 안에 실제 서비스 오픈!

---

## 📋 목차
1. [준비물](#1-준비물-10분)
2. [OpenAI API 키 발급](#2-openai-api-키-발급-5분)
3. [Vercel로 웹사이트 배포](#3-vercel로-웹사이트-배포-20분)
4. [Google 광고 붙이기](#4-google-광고-붙이기-20분)
5. [도메인 연결 (선택)](#5-도메인-연결-선택-10분)
6. [테스트 및 확인](#6-테스트-및-확인-5분)

---

## 1. 준비물 (10분)

### ✅ 필수 준비물
```
1. 이메일 주소 (Gmail 추천)
2. 신용카드 또는 체크카드
   - OpenAI API용: $5 충전 (1달에 $2-3 정도 사용)
   - Google AdSense용: 계좌 인증
3. 컴퓨터 (Windows, Mac 둘 다 OK)
4. 인터넷 연결
```

### 📥 프로그램 설치

#### Windows 사용자
1. **Git 설치**
   - https://git-scm.com/download/win 접속
   - "Click here to download" 클릭
   - 다운로드된 파일 실행
   - 계속 "Next" 클릭해서 설치

2. **Node.js 설치**
   - https://nodejs.org/ko 접속
   - "LTS 추천" 버튼 클릭
   - 다운로드된 파일 실행
   - 계속 "Next" 클릭해서 설치

#### Mac 사용자
1. **Terminal 열기**
   - Spotlight 검색 (⌘ + Space)
   - "Terminal" 입력 후 엔터

2. **Homebrew 설치** (Terminal에 복사 붙여넣기)
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

3. **Git & Node.js 설치** (Terminal에 입력)
   ```bash
   brew install git node
   ```

### ✅ 설치 확인
Windows: "명령 프롬프트" 열기 (시작 → cmd 입력)
Mac: Terminal 사용

아래 명령어 입력해서 버전 나오면 성공:
```bash
git --version
node --version
```

---

## 2. OpenAI API 키 발급 (5분)

### 단계별 진행

#### 1) OpenAI 가입
```
1. https://platform.openai.com 접속
2. "Sign up" 클릭
3. 구글 계정으로 가입 (또는 이메일로)
```

#### 2) 결제 수단 등록
```
1. 로그인 후 우측 상단 본인 이름 클릭
2. "Billing" 클릭
3. "Add payment method" 클릭
4. 신용카드/체크카드 정보 입력
5. $5-10 충전 (처음엔 $5면 충분)
```

💡 **비용 걱정 마세요!**
- 1회 운세 조회: 약 $0.002 (2원)
- 하루 100명 사용: $0.20 (200원)
- 한 달: 약 $6 (6,000원)

#### 3) API 키 발급
```
1. https://platform.openai.com/api-keys 접속
2. "+ Create new secret key" 클릭
3. Name: "운세토끼" 입력
4. "Create secret key" 클릭
5. 나타나는 키 복사 (sk-로 시작)
   ⚠️ 중요: 한 번만 보여지니까 꼭 저장!
```

#### 4) 키 저장
- 메모장에 붙여넣기
- 제목: "OpenAI API 키.txt"
- 예시: `sk-proj-abc123def456...`

---

## 3. Vercel로 웹사이트 배포 (20분)

### 왜 Vercel?
- ✅ 완전 무료
- ✅ 클릭 몇 번으로 배포
- ✅ 자동 HTTPS 제공
- ✅ 전 세계 빠른 속도

### 단계별 진행

#### Step 1: GitHub 가입 및 코드 올리기

##### 1) GitHub 가입
```
1. https://github.com 접속
2. "Sign up" 클릭
3. 이메일, 비밀번호 입력
4. 이메일 인증 완료
```

##### 2) 새 Repository 만들기
```
1. 로그인 후 우측 상단 "+" → "New repository"
2. Repository name: "fortune-rabbit" 입력
3. Public 선택
4. "Create repository" 클릭
```

##### 3) 코드 업로드

**Windows 사용자:**
```
1. 운세토끼 폴더를 원하는 위치로 이동 (예: 바탕화면)
2. 폴더 안에서 주소창에 "cmd" 입력 후 엔터
3. 아래 명령어 차례로 입력:
```

```bash
git init
git add .
git commit -m "운세토끼 초기 버전"
git branch -M main
git remote add origin https://github.com/당신의아이디/fortune-rabbit.git
git push -u origin main
```

**Mac 사용자:**
```
1. Terminal 열기
2. cd 입력 후 스페이스, 폴더를 Terminal로 드래그
3. 엔터 후 위와 동일한 명령어 입력
```

💡 **GitHub 아이디/비밀번호 입력 요청 시:**
- Username: GitHub 아이디
- Password: GitHub 비밀번호 (안 보여도 정상)

#### Step 2: Vercel 배포

##### 1) Vercel 가입
```
1. https://vercel.com 접속
2. "Sign Up" 클릭
3. "Continue with GitHub" 클릭
4. GitHub 계정으로 로그인
5. 권한 승인
```

##### 2) 프로젝트 Import
```
1. Vercel 대시보드에서 "Add New..." → "Project" 클릭
2. "fortune-rabbit" 찾아서 "Import" 클릭
3. Framework Preset: "Other" 선택
4. Build Command: 비워두기
5. Output Directory: "public" 입력
6. Install Command: "npm install" (자동)
```

##### 3) 환경 변수 설정 ⚠️ 중요!
```
1. "Environment Variables" 섹션 찾기
2. Name: OPENAI_API_KEY 입력
3. Value: 아까 저장한 OpenAI 키 붙여넣기
4. "Add" 클릭
```

##### 4) 배포!
```
1. "Deploy" 버튼 클릭
2. 2-3분 기다리기 ☕
3. 성공 메시지 나오면 완료!
```

##### 5) 내 사이트 주소 확인
```
화면에 나타나는 주소 복사
예시: https://fortune-rabbit-abc123.vercel.app
```

🎉 **축하합니다! 이제 전 세계 누구나 접속 가능!**

---

## 4. Google 광고 붙이기 (20분)

### Step 1: Google AdSense 가입

#### 1) AdSense 신청
```
1. https://www.google.com/adsense 접속
2. "시작하기" 클릭
3. 웹사이트 URL 입력
   → Vercel에서 받은 주소 입력
   예: fortune-rabbit-abc123.vercel.app
4. 국가: 대한민국 선택
5. 이용약관 동일 후 "AdSense 시작하기"
```

#### 2) 개인정보 입력
```
1. 이름, 주소 입력
2. 전화번호 입력
3. 계좌 정보 입력 (나중에 광고 수익 받을 계좌)
```

#### 3) 사이트 연결
```
1. AdSense 코드 복사 (head 태그 안에 넣으라고 나옴)
2. 코드 복사해두기
```

### Step 2: 사이트에 광고 코드 삽입

#### 1) 파일 다운로드
```
1. GitHub에서 fortune-final.html 열기
2. "Raw" 버튼 클릭
3. Ctrl+A (전체 선택) → Ctrl+C (복사)
4. 메모장에 붙여넣기
```

#### 2) 광고 코드 삽입

**위치 1: AdSense 자동 광고 (헤드 태그)**
```html
<head> 태그 아래에 AdSense 코드 붙여넣기:

<head>
    <!-- 여기에 AdSense 코드 붙여넣기 -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-여기에본인ID"
         crossorigin="anonymous"></script>
    
    <meta charset="UTF-8">
    ...
```

**위치 2: 배너 광고 (입력 화면)**
```html
현재 코드에서 이 부분 찾기:

<!-- 광고 영역 1 -->
<div class="ad-container">
    <div class="ad-label" data-i18n="ad">광고</div>
    <div class="ad-placeholder">
        Google AdSense
        <br>(320x100)
    </div>
</div>

아래처럼 변경:

<!-- 광고 영역 1 -->
<div class="ad-container">
    <ins class="adsbygoogle"
         style="display:inline-block;width:320px;height:100px"
         data-ad-client="ca-pub-여기에본인ID"
         data-ad-slot="여기에광고단위ID"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</div>
```

**위치 3: 네이티브 광고 (결과 화면)**
```html
<!-- 광고 영역 2 -->
<div class="ad-container">
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-format="fluid"
         data-ad-layout-key="여기에레이아웃키"
         data-ad-client="ca-pub-여기에본인ID"
         data-ad-slot="여기에광고단위ID"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</div>
```

#### 3) 수정한 파일 다시 올리기

**GitHub에 업데이트:**
```bash
# 명령 프롬프트/Terminal에서
cd 운세토끼폴더경로
git add fortune-final.html
git commit -m "광고 코드 추가"
git push
```

**Vercel 자동 재배포:**
- GitHub에 올리면 Vercel이 자동으로 감지
- 1-2분 후 새 버전 배포 완료!

### Step 3: AdSense 승인 기다리기

```
⏰ 검토 기간: 1일 ~ 2주
📧 승인 이메일 올 때까지 기다리기

승인 조건:
✅ 충분한 콘텐츠 (운세 서비스는 OK)
✅ 독창적인 내용 (AI 운세로 충분)
✅ 사용자 친화적 디자인
✅ 정책 위반 없음
```

💡 **승인 빨리 받는 팁:**
- 매일 10-20명 정도 테스트 트래픽 발생시키기
- 친구들에게 공유해서 방문자 늘리기
- 2-3일 간격으로 콘텐츠 조금씩 업데이트

---

## 5. 도메인 연결 (선택, 10분)

### 왜 도메인?
```
❌ fortune-rabbit-abc123.vercel.app (무료, 긴 주소)
✅ unse-tokki.com (유료 $10/년, 짧고 기억하기 쉬움)
```

### 도메인 구매 (선택 사항)

#### 추천 사이트
```
1. Namecheap (www.namecheap.com) - 가장 저렴
2. Cafe24 (www.cafe24.com) - 한국어 지원
3. GoDaddy (www.godaddy.com) - 유명함
```

#### 구매 과정
```
1. 원하는 사이트 접속
2. 도메인 검색
   예: unse-tokki.com
   예: fortune-rabbit.net
3. 사용 가능하면 장바구니 담기
4. 결제 ($10-15/년)
```

#### Vercel에 연결
```
1. Vercel 대시보드 → 프로젝트 클릭
2. "Settings" → "Domains" 클릭
3. 도메인 입력 → "Add" 클릭
4. 나타나는 설정값 복사
5. 도메인 구매한 사이트에서 DNS 설정
   - A Record: 76.76.21.21
   - CNAME: cname.vercel-dns.com
6. 10분-1시간 기다리면 연결 완료
```

---

## 6. 테스트 및 확인 (5분)

### 최종 체크리스트

#### ✅ 기능 테스트
```
1. 사이트 접속 확인
2. 4개 언어 전환 확인
   - 🌏 버튼 클릭
   - 한국어/English/日本語/中文 모두 테스트
3. 운세 보기
   - 생년월일 입력
   - 결과 나오는지 확인
4. 상세보기
   - 각 운세(연애/재물/건강/업무) 클릭
   - 광고 시청 시뮬레이션 확인
   - 잠금 해제 후 내용 보이는지 확인
```

#### ✅ 광고 확인
```
승인 전: "광고 영역" 표시됨 (정상)
승인 후: 실제 광고 나타남
```

#### ✅ 모바일 테스트
```
1. 휴대폰으로 사이트 접속
2. 모든 기능 작동하는지 확인
3. 터치 인터페이스 확인
```

---

## 🎉 완료! 이제 뭘 해야 할까?

### 1단계: 친구들에게 공유 (오늘)
```
"내가 만든 운세 사이트! 한번 해봐~"
→ 카톡, 인스타, 페북에 공유
→ 초기 트래픽 확보
```

### 2단계: 마케팅 시작 (1주일)
```
✅ 인스타그램 계정 만들기
   - @운세토끼
   - 매일 운세 한 줄씩 포스팅
   
✅ TikTok/릴스 짧은 영상
   - "오늘의 운세 확인하러 가기"
   - 사이트 링크 첨부
   
✅ 네이버 카페/블로그
   - 운세 커뮤니티에 소개
```

### 3단계: 수익 확인 (2주-1개월)
```
AdSense 대시보드에서 확인
- 방문자 수
- 광고 클릭 수
- 예상 수익
```

---

## 🆘 문제 해결

### Q1: OpenAI API 오류
```
증상: "API key error" 메시지
해결:
1. Vercel → Settings → Environment Variables
2. OPENAI_API_KEY 값 확인
3. 잘못되었으면 삭제 후 다시 추가
4. "Redeploy" 클릭
```

### Q2: 사이트가 안 열려요
```
증상: 404 에러
해결:
1. Vercel 대시보드에서 배포 상태 확인
2. "Deployments" 탭에서 최신 배포 클릭
3. 에러 로그 확인
4. 대부분 public 폴더 설정 문제
   → Settings → General → Output Directory: "public"
```

### Q3: 광고가 안 나와요
```
승인 전: 정상 (빈 공간 또는 플레이스홀더)
승인 후에도 안 나오면:
1. AdSense 코드 제대로 붙였는지 확인
2. 브라우저 캐시 삭제 후 다시 접속
3. 광고 차단기 끄기
4. 24시간 기다려보기 (광고 로딩 시간)
```

### Q4: 한국어만 나와요
```
증상: 언어 변경이 안 됨
해결:
1. 브라우저 캐시 삭제
2. 시크릿 모드로 접속
3. F12 → Console 탭에서 에러 확인
```

---

## 💰 수익 극대화 팁

### 1. SEO 최적화
```
Google Search Console 등록:
1. https://search.google.com/search-console
2. "속성 추가" → 사이트 URL 입력
3. 소유권 확인 (Vercel DNS 설정)
4. Sitemap 제출: https://당신사이트.com/sitemap.xml
```

### 2. 트래픽 늘리기
```
✅ 매일 한 줄 운세 SNS 포스팅
✅ 해시태그 활용
   #오늘의운세 #운세 #타로 #사주 #점 #운세토끼
✅ 운세 커뮤니티 활동
✅ 친구 추천 이벤트
```

### 3. 광고 최적화
```
AdSense 대시보드에서:
- 광고 클릭률 높은 위치 파악
- 광고 크기 A/B 테스트
- 자동 광고 활성화
```

---

## 📞 도움이 필요하면?

### 커뮤니티
- OpenAI 커뮤니티: https://community.openai.com
- Vercel 디스코드: https://vercel.com/discord
- Google AdSense 포럼: https://support.google.com/adsense

### 공식 문서
- OpenAI: https://platform.openai.com/docs
- Vercel: https://vercel.com/docs
- AdSense: https://support.google.com/adsense

---

## ✅ 최종 체크리스트

배포 전:
- [ ] Git, Node.js 설치 완료
- [ ] OpenAI API 키 발급
- [ ] GitHub 계정 생성
- [ ] Vercel 계정 생성

배포 완료:
- [ ] GitHub에 코드 업로드
- [ ] Vercel 배포 성공
- [ ] 환경 변수 설정 (OPENAI_API_KEY)
- [ ] 사이트 접속 확인

광고 설정:
- [ ] AdSense 신청
- [ ] 광고 코드 삽입
- [ ] 승인 대기 중

운영:
- [ ] SNS 계정 생성
- [ ] 초기 마케팅 시작
- [ ] 수익 확인

---

🎊 **축하합니다!**

이제 당신은 실제 서비스를 운영하는 운영자입니다!
매일 조금씩 개선하고, 마케팅하면서 성장시켜보세요.

**목표: 3개월 안에 월 $1,000 수익!** 💰

화이팅! 🐰✨