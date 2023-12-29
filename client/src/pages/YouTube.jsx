import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import Highlight from 'react-highlight'
import 'highlight.js/styles/atom-one-dark.css';

import { smooth } from '../assets/script/smooth';
import { splint } from '../assets/script/splint';
import { subIntro } from '../assets/script/subIntro';
import { subSlider } from '../assets/script/subSlider';
import { navBar } from '../assets/script/navBar';
import { subClose } from '../assets/script/subClose';
import { subAbout } from '../assets/script/subAbout';
import { subNext } from '../assets/script/subNext';

import CommentArea from '../components/comment/CommentArea';

const YouTube = () => {
    // hightlight
    const codeSnippet = `
        const channelPageClass = loading ? 'isLoading' : 'isLoaded'
            //기존코드
        <section id='channelPage' className={channelPageClass}>
        {channelDetail && (
            //기존 코드
        )}
    `;
    // script
    useEffect(() => {
        smooth();
        splint();
        subIntro();
        subSlider();
        navBar();
        subClose();
        subAbout();
        subNext();
    }, [])

    const [modalFlag, setModalFlag] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, () => setModalFlag(false));

    function useOnClickOutside(ref, handler) {
        useEffect(() => {
            const listener = (event) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        }, [ref, handler]);
    }

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
                    <span className="pageIndex 01">02</span>
                </span>
            </div>
            <div className="scrollBar">
                <progress max="100" value="0"></progress>
            </div>

            <div className='comment' onClick={() => setModalFlag(true)}>
                <svg viewBox="0 -0.5 25 25" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.1631 5H15.8381C17.8757 5.01541 19.5151 6.67943 19.5001 8.717V13.23C19.5073 14.2087 19.1254 15.1501 18.4384 15.8472C17.7515 16.5442 16.8158 16.9399 15.8371 16.947H9.1631L5.5001 19V8.717C5.49291 7.73834 5.8748 6.79692 6.56175 6.09984C7.24871 5.40276 8.18444 5.00713 9.1631 5Z" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.50009 11C7.50009 10.4477 7.94781 10 8.50009 10C9.05238 10 9.50009 10.4477 9.50009 11C9.50009 11.5523 9.05238 12 8.50009 12C8.23488 12 7.98052 11.8946 7.79298 11.7071C7.60545 11.5196 7.50009 11.2652 7.50009 11Z" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.5001 11C11.5001 10.4477 11.9478 10 12.5001 10C13.0524 10 13.5001 10.4477 13.5001 11C13.5001 11.5523 13.0524 12 12.5001 12C11.9478 12 11.5001 11.5523 11.5001 11Z" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5001 11C15.5001 10.4477 15.9478 10 16.5001 10C17.0524 10 17.5001 10.4477 17.5001 11C17.5001 11.5523 17.0524 12 16.5001 12C15.9478 12 15.5001 11.5523 15.5001 11Z" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            {modalFlag && (
                <CommentArea className='modal' ref={ref} />
            )}

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

            <div className="subBgSlider s2">
                <div className="subBgSliderWrap">
                    <section className='section s1'>
                        <div className="sub__center">
                            <div className="text">
                                <div className="titleWrap">
                                    <h5 className="subTitle split">
                                        YouTube
                                    </h5>
                                </div>
                                <div className="subDesc split">
                                    React와 YouTube API를 활용한 사이트입니다.<br />
                                    인기 유튜버들의 구독순 1위부터 30위까지 최신 영상을 제공하며, <br />
                                    사용자는 쉽게 새로운 영상을 찾아 시청할 수 있는 편리한 환경을 경험할 수 있습니다.
                                </div>
                            </div>
                        </div>
                        <div className="transitionOverlay"></div>
                    </section>
                    <section className='section s2'>
                    </section>
                    <section className='section s3'>
                        <div className="pageSection">
                            #2
                        </div>
                        <div className="info">
                            <div className="info__inner">
                                <h2 className='mPageSection'>#2</h2>
                                <h2>Website</h2>
                                <div className="coding">
                                    <h3>(coding)</h3>
                                    <p>React, YouTube API</p>
                                </div>
                                <div className="workTime">
                                    <h3>(workTime)</h3>
                                    <p>2 Weeks</p>
                                </div>
                                <div className="link">
                                    <div className="link1">
                                        <Link to="https://dasibogi-youtube.netlify.app/" target="_blank"
                                            className="underline">
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
                                    <Link to="https://github.com/yunyoungsik/youtube-project" target="_blank" className="underline">
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
                                <span>더보기</span>
                                <p>
                                    페이지 로딩 시 초기 비디오와 채널 정보를 가져와서 '더보기' 버튼을 클릭할 때마다 nextPageToken을 활용하여 추가 비디오를 가져와 이전 목록에 이어 붙입니다.<br />
                                    사용자는 끊김 없이 계속해서 비디오를 탐색할 수 있습니다.
                                </p>
                                <span>Search</span>
                                <p>
                                    Search 컴포넌트는 사용자가 입력한 검색어를 추적하여 URL을 변경하고 검색 결과를 표시합니다.<br />
                                    handleSearch 함수는 비어 있지 않은 검색어에 대해 URL을 변경하고 검색어 상태를 초기화하여 새로운 검색을 가능하게 합니다.
                                </p>
                                <span>SEO</span>
                                <p>
                                    Main.jsx에 적용된 HelmetProvider로 전체 앱을 감싸고, Helmet 컴포넌트를 사용하여 페이지의 제목, 기본 타이틀, 메타 태그(description) 등을 동적으로 조작합니다.<br />
                                    또한, props.children을 사용하여 Main 컴포넌트로 전달된 다른 컴포넌트들을 표시합니다.<br />
                                    이렇게 함으로써 각 페이지마다 다른 제목이나 메타데이터를 설정하고, &lt;head&gt; 요소를 동적으로 조작하여 SEO 및 페이지의 메타정보를 관리할 수 있습니다.<br />
                                </p>
                            </div>
                        </div>
                        <div className="trouble">
                            <div className="trouble__inner">
                                <h2>Trouble Shooting</h2>
                                <h3>문제</h3>
                                <p>정보를 먼저 불러오는 경우 에러 발생</p>
                                <h3>해결</h3>
                                <p>
                                    조건부 렌더링으로 에러 방지
                                </p>
                                <Highlight className="javascript">
                                    {codeSnippet}
                                </Highlight>
                                <p>
                                    데이터 로드 전에 해당 정보를 사용하여 발생한 문제를 해결하기 위해 &#123;channelDetail &amp;&amp;&#125;를 사용하여 조건부 렌더링을 수행했습니다.<br />
                                    이를 통해 코드는 channelDetail이 존재하는지 여부를 확인하고, 데이터가 로드된 후에만 해당 코드 블록을 실행하게 됩니다.<br />
                                    이러한 방법을 통해 에러를 방지하고 안정적인 동작을 보장할 수 있습니다.
                                </p>
                            </div>
                        </div>
                        <div className="subNext">
                            <div className="subNext__inner">
                                <span>
                                    <Link to="#" className="underline nextPage">(next)</Link>
                                </span>
                                <h2>
                                    <Link to="#" className='nextPage'>
                                        <span>Movie</span>
                                    </Link>
                                    <Link to="#" className='nextPage'>
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

export default YouTube