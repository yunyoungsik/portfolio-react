# portfolio_react
   
## 설치
npx create-react-app .   
npm install react-router-dom   
npm install @gsap/react   
npm install gsap   
npm i @studio-freight/lenis  
npm install react-highlight --save    

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