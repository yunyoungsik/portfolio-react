import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// import Highlight from 'react-highlight'
// import 'highlight.js/styles/atom-one-dark.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { smooth } from '../assets/script/smooth';
import { subIntro } from '../assets/script/subIntro';
import { subSlider } from '../assets/script/subSlider';
import { navBar } from '../assets/script/navBar';
import { subClose } from '../assets/script/subClose';
import { subAbout } from '../assets/script/subAbout';
import { subNext } from '../assets/script/subNext';

import CommentArea from '../components/comment/CommentArea';

const Portfolio = () => {

    // hightlight
    const codeSnippet = `return () => {
        // ScrollTrigger 해제
        ScrollTrigger.getAll().forEach(trigger => {
            trigger.kill();
        });
        // GSAP 애니메이션 중지 또는 제거
        animation.kill();
    }`;
    // script
    useEffect(() => {
        smooth();
        subIntro();
        subSlider();
        navBar();
        subClose();
        subAbout();
        subNext();
    }, [])

    return (
        <main id='main' className='main sub'>
            <Link to="/home" className="close sub goMain">
                <svg width="16" height="16" viewBox="0 0 24 24" data-v-c5fc2e64="">
                    <path fill="currentColor"
                        d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"
                        data-v-c5fc2e64=""></path>
                </svg>
            </Link>
            <Link to="/about" className="about sub underline">About</Link>
            <div className="subPage">
                <span className="current sub">
                    <span className="pageIndex 01">05</span>
                </span>
            </div>
            <div className="scrollBar">
                <progress max="100" value="0"></progress>
            </div>

            <div className="mainSlider" id="subMainSlider">
                <div className="mainSlider__top">
                    <h1 className="logo">
                        <Link to="/home">Y</Link>
                    </h1>
                    <div className="pause">
                        ||
                    </div>
                </div>
                <div className="mainSlider__center">
                    <div className="center__text">
                        <div className="titleSlider">
                            <div className="titleWrap">
                                <h2 className="title">
                                    Trend Device
                                </h2>
                            </div>
                        </div>
                        <div className="descSlider">
                            <div className="descWrap">
                                <p className="desc">
                                    PHP를 이용하여 작업한 사이트입니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="center__img">
                        <div className="centerSliderWrap mouse__text">
                            <div className="centerSlider s1">
                                <Link to="/home"><img src="https://images.unsplash.com/photo-1659469378420-e68c6ee21a28?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="main img 01" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainSlider__bottom sub">
                    <div className="page">
                        <span className="current">
                            <span className="pageIndex 01">01</span>
                            <span className="pageIndex 01">01</span>
                        </span>
                        <span className="pageLine">―</span>
                        <span>05</span>
                    </div>
                    <div className="scroll__text">(Scroll)</div>
                    <div className="scroll__arrow">
                        <div className="prevBtn">
                            <svg width="32" height="32" viewBox="0 0 24 24" data-v-c5fc2e64="">
                                <path fill="currentColor" d="M7.4 15.4L6 14l6-6l6 6l-1.4 1.4l-4.6-4.6Z" data-v-c5fc2e64="">
                                </path>
                            </svg>
                        </div>
                        <div className="nextBtn">
                            <svg width="32" height="32" viewBox="0 0 24 24" data-v-c5fc2e64="">
                                <path fill="currentColor" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z" data-v-c5fc2e64=""></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="subBgSlider s5">
                <div className="subBgSliderWrap">
                    <section className='section s1'>
                        <div className="sub__center">
                            <div className="text">
                                <div className="titleWrap">
                                    <h5 className="subTitle split">
                                        Portfolio
                                    </h5>
                                </div>
                                <div className="subDesc split">
                                    React를 이용하여 만든 포트폴리오는 웹사이트입니다.<br />
                                    직접 제작한 웹사이트의 간단한 설명과 링크, 깃허브 링크를 제공하고 있습니다.
                                </div>
                            </div>
                        </div>
                        <div className="transitionOverlay"></div>
                    </section>
                    <section className='section s2'>
                    </section>
                    <section className='section s3'>
                        <div className="pageSection">
                            #5
                        </div>
                        <div className="info">
                            <div className="info__inner">
                                <h2 className='mPageSection'>#5</h2>
                                <h2>Website</h2>
                                <div className="coding">
                                    <h3>(coding)</h3>
                                    <p>React</p>
                                </div>
                                <div className="workTime">
                                    <h3>(workTime)</h3>
                                    <p>3 Weeks</p>
                                </div>
                                <div className="link">
                                    <div className="link1">
                                        <Link to="#" target="_blank" className="underline">
                                            <i>Link</i>
                                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                data-v-50e346e1="">
                                                <path
                                                    d="M2.66949 45L0 42.3305L38.5169 3.81356H3.05085V0H45V41.9492H41.1864V6.48305L2.66949 45Z"
                                                    fill="currentColor" data-v-50e346e1=""></path>
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="link2">
                                    </div>
                                    <Link to="https://github.com/yunyoungsik/portfolio-react" target="_blank" className="underline">
                                        <i>Github</i>
                                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            data-v-50e346e1="">
                                            <path d="M2.66949 45L0 42.3305L38.5169 3.81356H3.05085V0H45V41.9492H41.1864V6.48305L2.66949 45Z"
                                                fill="currentColor" data-v-50e346e1=""></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="desc">
                            <div className="desc__inner">
                                <h2>Description</h2>
                                <span>메인</span>
                                <p>
                                    메인
                                    메인 페이지에서는 useEffect를 이용하여 smooth, splint, homeMouse, homeSlider, homeTransition, homeAbout 함수들을 호출하고,<br />
                                    Link 컴포넌트를 통해 페이지 내에는 다양한 컨텐츠들이 Link 컴포넌트를 통해 연결되어 있습니다.<br />
                                    페이지의 스크롤 효과와 이미지들도 해당하는 클래스를 이용하여 구성되어 있어요.
                                </p>
                                <span>서브</span>
                                <p>
                                    서브페이지에서는 코드 하이라이팅을 위해 SyntaxHighlighter를 사용하였으며, 이 라이브러리는 코드를 강조하여 보기 좋게 표시해줍니다.<br />
                                    그리고 GSAP를 활용하여 subIntro, subSlider 등의 함수들을 통해 애니메이션을 초기화하고 실행하고 있습니다.<br />
                                    부드러운 스크롤을 위해 Lenis를 사용하는 smooth 함수도 구현되어 있고, CommentArea는 페이지에 댓글 기능을 추가하기 위한 컴포넌트입니다.
                                </p>
                            </div>
                        </div>
                        <div className="trouble">
                            <div className="trouble__inner">
                                <h2>Trouble Shooting</h2>
                                <h3>문제</h3>
                                <p>Home, sub 페이지에서 About페이지로 넘어가도 Scroll 효과가 남아있음</p>
                                <h3>해결</h3>
                                <SyntaxHighlighter
                                    language="javascript"
                                    style={oneDark}
                                    showLineNumbers
                                >
                                    {codeSnippet}
                                </SyntaxHighlighter>
                                <p>
                                    홈 및 서브페이지에서는 ScrollTrigger 및 GSAP 애니메이션이 적용되어 페이지 스크롤에 효과를 주고 있습니다.<br />
                                    하지만 About 페이지로 이동 시 해당 효과가 지속되는 문제가 발생하였습니다.<br />
                                    이를 해결하기 위해 useEffect 내부에서 ScrollTrigger와 GSAP 애니메이션을 제거하도록 처리했습니다.<br />
                                    이로써 About 페이지로 이동할 때 이전 페이지의 스크롤 효과가 중지되어 자연스러운 전환을 보장합니다.<br />
                                    위의 코드는 컴포넌트가 unmount될 때 실행되는 cleanup 함수로, ScrollTrigger와 GSAP 애니메이션을 중지시키는 역할을 수행합니다.
                                </p>
                            </div>
                        </div>
                        <div className='comment'>
                            <CommentArea />
                        </div>
                        <div className="subNext">
                            <div className="subNext__inner">
                                <span>
                                    <Link to="#" className="underline goMain">(next)</Link>
                                </span>
                                <h2>
                                    <Link to="#" className='goMain'>
                                        <span>Main</span>
                                    </Link>
                                    <Link to="#" className='goMain'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                            <path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                                                data-name="Right" />
                                        </svg>
                                    </Link>
                                </h2>
                                <span>
                                    <Link to="/home" className="goMain underline">(main)</Link>
                                </span>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="subTransitionOverlay"></div>
            </div>
        </main>
    )
}

export default Portfolio