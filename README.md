# portfolio_react
   
## client
npx create-react-app .   
npm install react-router-dom   
npm install @gsap/react   
npm install gsap   
npm i @studio-freight/lenis  
npm install react-highlight --save  
npm install axios   
npm install http-proxy-middleware --save   

## server
npm init -y
npm install express --save
npm install nodemon --save
npm install path --save
npm install mongoose --save

## 트러블슈팅
문제 : Home, sub 페이지에서 About페이지로 넘어가도 Scroll 효과가 남아있음
   
해결 : 해당 기능이 적용된 페이지에 서 ScrollTrigger과 gsap 애니메이션을 해제하고 넘어가도록 처리함   
```js
return () => {
    // ScrollTrigger 해제
    ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill();
    });
    // GSAP 애니메이션 중지 또는 제거
    animation.kill();
};
```

2. 3. page not found - 404 Error
[문제]
배포한 페이지에 접속하고 나서 첫 페이지까지는 잘 렌더링이 되었으나, 페이지를 이동 한 후 새로고침 시 page not found 404라는 창이 뜨는 문제가 발생했다.
   
[원인]
spa방식인 리액트는 하나의 페이지인 index.html만 렌더링 하게 되며, 리액트가 최초 접속할 때의 url 은 / 이다. 서버는 기본 URL 요청이 들어왔을 때 index.html만 보내는 규칙만 갖고 있기 때문에 화면을 넘기면서 라우팅된 각 url(/a, /b)에 맞는 자원이 존재하지 않아 발생하는 오류이다.
그래서 이를 해결하기 위해선 URL에 대한 리디렉션 및 다시 쓰기 규칙을 재구성해야 한다.
   
[해결]
1. 프로젝트의 public 폴더 안에 다음과 같이 _redirects라는 이름의 파일을 생성하고, 아래와 같이 코드를 입력해 저장해 주었다.   
```js
/* /index.html 200
```
2. package.json과 README파일이 있는 프로젝트 루트 디렉토리에 netlify.toml라는 이름의 파일을 생성한다.
```js
[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```
그 후 위와 같이 코드를 작성해 저장 후 push해 주어 404 문제를 해결할 수 있었다.