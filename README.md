# 트리플 랜딩 섹션 과제

트리플 랜딩 섹션 과제입니다.

라이브 버전 https://triple-lending-section.vercel.app

## 1. 실행 방법

### `dev` 버전 실행방법

```bash
npm install # 이 커맨드는 레포지토리의 root폴더에서 실행해주세요
npm run start
```

<br/>

### `production` 실행방법

```bash
npm run build  # 이 커맨드는 레포지토리의 root폴더에서 실행해주세요
npx serve -s build

```

<br/>

## 2. 사용한 기술

### 1. 정적 분석 도구

- typescript
- eslint
- prettier
- titicacadev/eslint-config-triple 플러그인 사용

### 2. git hook관리

- husky
- lint-staged

### 3. 스타일 관리

- styled-components

### 4. test

- jest

### 5. web API

- requestAnimationFrame
- setTimeout

### 6. etc

- craco

<br/>

## 3.기술별 사용한 이유

### 1. styled-component

<br/>

- 컴포넌트 파일 내에 스타일이 있기에 개발 및 수정이 편의하다.
- props로 css의 속성값을 전달할 수 있음
- 클래스 이름 대신 리엑트 컴포넌트 type의 이름을 정할 수 있어서 가독성이 좋음

<br/>

### 2. requestAnimationFrame

<br/>

- 화면 주사율에 따른 시간 설정(유저마다 사용하는 화면주사율이 다르다. 대부분은 60hz이지만 최신 m1 맥북 같은 경우 120hz를 지원한다.)
- requestAnimationFrame의 경우 repaint와 reflow가 일어나기 직전에 실행된다. 하나의 frame 내에서 실행될 수 있다.
- setInterval의 경우 하나의 프레임 내에서 규칙적이지 않은 횟수로 실행될 수 있다. 그래서 하나의 frame당 setInterval내 callback 함수가 일정하지 않은 횟수로 실행될 수 있다.

<br/>

### 3. husky

<br/>

- eslint 룰과 prettier를 commit을 하기 전에 한 번 더 적용시킬 수 있다.
- commit 하기 전에 파일을 수동으로 확인하기 전에 자동으로 적용시킬 수 있어서 개발 편의성이 향상된다.
- lint-staged를 활용하면 전체 파일이 아닌 staged에 있는 파일들만 적용시킬 수 있다.

<br/>

### 4. craco

<br/>

- create-react-app으로 제작이 된 앱의 경우 eject를 하지 않으면 webpack에서 파일 alias를 적용할 수 없다.
- craco를 활용하면 파일 경로 alias를 적용할 수 있어서 개발 편의성이 증가한다.

<br/>

## 4. Custom Hooks

### useRaf

- 원하는 시점부터 원하는 기간 동안 requestAnimationFrame을 통한 경과시간(elapsed time)을 받아올 수 있다.
- useRaf는 정밀한 animation 작업을 하는데 활용할 수 있다.

## 5. 폴더 구조

```bash
├── README.md
├── craco.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.tsx
│   ├── GlobalStyles.tsx
│   ├── assets
│   │   ├── badge-apple4x.png
│   │   ├── play-store2x.png
│   │   └── triple2x.png
│   ├── components
│   │   ├── animation
│   │   │   └── SlideUp.tsx
│   │   ├── common
│   │   │   └── Layout.tsx
│   │   └── section
│   │       ├── Awards.tsx
│   │       ├── Indicators.tsx
│   │       ├── LandingSection.tsx
│   │       └── LeftContentLogo.tsx
│   ├── hooks
│   │   └── useRaf.ts
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── setupTests.ts
│   └── utils
│       └── easeOut
│           ├── index.test.ts
│           └── index.ts
├── tsconfig.json
└── tsconfig.paths.json
```
