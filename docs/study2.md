## Vue Study 2

### 13강

**NodeJs 설치**

NodeJs를 설치해야 한다. 노드JS는 홈페이지에서 설치할 수 있다. 다음 명령어를 통해서 vue를 설치할 수 있다.

```bash
node -v
npm -v
npm install -g @vue/cli
vue create test1 // Vuex, Router 나머지는 모두 Default
```



**Vue 설치시 생성되는 디렉토리**

1. Node_modules : Vue가 사용하는 Node Module
2. package.json : dependencies -> 배포하는데 필요한 모듈, devDependencies : 개발하는데만 필요한 dependency
3. src
   1. main.js : 
   2. App.vue : 
4. public : index.html



**실행하기**

이렇게 실행하면 Hot-loader 기능이 실행되서 소스코드가 수정되면 자동으로 반영된다.

```bash
npm run serve
```



### 14강

SPA = [SinglePage Application]

Single Page Application 이란 한개의 페이지만 있는 어플리케이션? --> 하나의 웹 페이지처럼 보이게 하는 프로그램

실행되는 순서

1. `public/index.html` 이 처음에 로드 됨
2. `src/main.js` 가 실행된다,
3. `src/App.vue` 파일에서 Router가 연결된다.
4. `src/router/index.js` 파일에서 routes를 설정할 수 있다.
5. `src/views/Home`, `src/views/About`가 주요 화면을 정의한다.
6. `src/components/HelloWorld`는 자주 사용되는 컴포넌트를 모아 둘 수 있다.

