# 🌿 EcoLink Frontend

**EcoLink**는 스마트한 친환경 자원봉사 플랫폼입니다.  
이 저장소는 EcoLink 플랫폼의 **프론트엔드**를 담당하며, **Vue 3**와 **Vite**, **Tailwind CSS** 기반으로 개발되었습니다.

---

## 🌱 서비스 소개

**EcoLink**는 무단투기 문제 해결과 자원봉사 활동의 효율적인 매칭을 돕는 **스마트 친환경 자원봉사 플랫폼**입니다.

### 🧠 핵심 기능

- **IoT 센서 + AI 분석**: 쓰레기 적치 지역을 실시간으로 파악
- **봉사자 매칭**: 개인 및 단체를 신속하게 연결
- **데이터 활용**: 핫스팟 예측, 지자체/NGO 정책 수립 지원
- **봉사 실적 자동 인증**: 투명한 실적 관리
- **Webex 연동**: 협업 및 성과 공유 간편화
- **기여도 추적 + 보상 시스템**: 활동 의욕을 높이는 배지와 포인트
- **쓰레기 유형 분석**: 무단투기 예방 및 환경보호에 기여

---

## 📦 기술 스택

- 🖼️ **Vue 3**
- ⚡ **Vite**
- 🎨 **Tailwind CSS**
- 🧹 **ESLint** + **Prettier**
- 💬 **Webex API 연동**
- 🌐 **RESTful API 통신 구조**

---

## 🚀 시작하기

### ✅ 사전 조건

- Node.js 16.x 이상
- npm 8.x 이상

### 1. 저장소 클론

```bash
git clone https://github.com/CISCO-EcoLink/frontend.git
cd frontend
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

### 4. 프로덕션 빌드

```bash
npm run build
```

### 5. 코드 린트 검사 및 자동 포맷팅

```bash
npm run lint         # 코드 린트 검사
npm run format       # Prettier로 코드 포맷팅
```

---

## 📁 프로젝트 구조

```
├── public/             # 정적 파일
├── src/
│   ├── assets/         # 이미지, 스타일
│   ├── components/     # 공통 컴포넌트
│   ├── views/          # 페이지 뷰
│   ├── router/         # 라우터 설정
│   ├── utils/          # 유틸 함수
│   └── App.vue         # 루트 컴포넌트
├── tailwind.config.js  # Tailwind 설정
├── vite.config.js      # Vite 설정
└── package.json        # 프로젝트 정보 및 스크립트
```

---

## 🛠 개발 환경 권장 사항

- **IDE**: Visual Studio Code
- **필수 확장 프로그램**
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (Vue 3 지원)
  - ESLint, Prettier
- **Vetur 비활성화 권장** (Vue 3와 충돌 가능성 있음)

---

## 📄 라이선스

본 프로젝트는 [MIT 라이선스](LICENSE)를 따릅니다.  
자유롭게 사용하고 기여해주세요!

---
