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
import { subNext4 } from '../assets/script/subNext4';

import CommentArea from '../components/comment/CommentArea';

const Movie = () => {

    // hightlight
    const codeSnippet = `if (selectedPhone) {
      const movieBasic = ref({});
      // 초기값으로 객체 설정
      const movieInfo = ref({});
      // 나머지 변수들도 동일하게 객체로 초기화
      const resMovieBasic = await axios.get('api주소');
      movieBasic.value = resMovieBasic.data;
      // 나머지 변수들도 동일하게 .value 대신 객체 자체를 변경
    }`;
    // script
    useEffect(() => {
        smooth();
        subIntro();
        subSlider();
        navBar();
        subClose();
        subAbout();
        subNext4();
    }, [])

    return (
        <main id='main' className='main sub'>
            <Link to="/home" className="close sub goMain" prefetch="true">
                <svg width="16" height="16" viewBox="0 0 24 24" data-v-c5fc2e64="">
                    <path fill="currentColor"
                        d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"
                        data-v-c5fc2e64=""></path>
                </svg>
            </Link>
            <Link to="/about" className="about sub underline" prefetch="true">About</Link>
            <div className="subPage">
                <span className="current sub">
                    <span className="pageIndex 01">03</span>
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
                    <div className="burger">
                        <svg width="800px" height="800px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <rect width="352" height="32" x="80" y="96" fill="var(--ci-primary-color, #000000)" className="ci-primary" />
                            <rect width="352" height="32" x="80" y="240" fill="var(--ci-primary-color, #000000)" className="ci-primary" />
                            <rect width="352" height="32" x="80" y="384" fill="var(--ci-primary-color, #000000)" className="ci-primary" />
                        </svg>
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

            <div className="subBgSlider s3">
                <div className="subBgSliderWrap">
                    <section className='section s1'>
                        <div className="sub__center">
                            <div className="text">
                                <div className="titleWrap">
                                    <h5 className="subTitle split">
                                        Movie
                                    </h5>
                                </div>
                                <div className="subDesc split">
                                    Vue와 TMDB API를 활용한 이용한 영화 정보 사이트입니다.<br />
                                    최신 영화 정보와 사용자가 특정 영화 선택하면 상세 정보 볼 수 있습니다.<br />
                                    포스터, 제목, 개봉일, 평점 등 사용자들이 관심 있는 영화 정보를 쉽게 얻을 수 있습니다.
                                </div>
                            </div>
                        </div>
                        <div className="transitionOverlay"></div>
                    </section>
                    <section className='section s2'>
                    </section>
                    <section className='section s3'>
                        <div className="pageSection">
                            #3
                        </div>
                        <div className="info">
                            <div className="info__inner">
                                <h2 className='mPageSection'>#3</h2>
                                <h2>Website</h2>
                                <div className="coding">
                                    <h3>(coding)</h3>
                                    <p>Vue, TMDB API</p>
                                </div>
                                <div className="workTime">
                                    <h3>(workTime)</h3>
                                    <p>2 Weeks</p>
                                </div>
                                <div className="link">
                                    <div className="link1">
                                        <Link to="https://movieproject2023.netlify.app/" target="_blank" className="underline">
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
                                    <Link to="https://github.com/yunyoungsik/movie-project" target="_blank" className="underline">
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
                                <span>메인 페이지</span>
                                <p>
                                    Vue의 Composition API에서 제공하는 &lt;script setup&gt;을 사용하여 컴포넌트 로직을 정의하고 반응형 변수인 movies와 searchTerm을 정의했습니다.<br />
                                    switch문을 사용하여 다양한 영화 카테고리에 따라 API URL을 결정하고 Axios를 통해 해당 URL에 요청을 보냅니다. 그리고 받은 결과를 movies에 할당합니다.<br />
                                    사용자가 입력한 검색어로 영화를 검색하는 함수를 구현했습니다. searchTerm을 쿼리로 사용하여 API를 호출하고 받은 결과를 movies에 할당합니다.
                                </p>
                                <span>상세 페이지</span>
                                <p>
                                    상세페이지에서는 각 섹션을 컴포넌트로 분리해서 사용했습니다. HeaderSection, DetailIntro 등의 컴포넌트를 사용해서 영화 정보를 보여줍니다.<br />
                                    setup함수를 사용하여 데이터와 API 호출을 관리합니다. ref를 사용하여 movieBasic, movieInfo 등을 초기화하고, useRoute를 이용하여 현재 라우트 정보를 가져옵니다.<br />
                                    VITE_API_KEY를 사용하여 환경 변수를 통해 API 키를 가져옵니다. .env 파일에 저장된 변수를 활용하여 API 키를 보호합니다.
                                </p>
                            </div>
                        </div>
                        <div className="trouble">
                            <div className="trouble__inner">
                                <h2>Trouble Shooting</h2>
                                <h3>문제</h3>
                                <p>ref를 사용 시 값이 변경되지 않는 경우</p>
                                <h3>해결</h3>
                                <SyntaxHighlighter
                                    language="javascript"
                                    style={oneDark}
                                    showLineNumbers
                                >
                                    {codeSnippet}
                                </SyntaxHighlighter>
                                <p>
                                    기존 코드에서 ref가 객체를 반환하도록 설정되었다면 API 응답을 받은 후 .value를 사용하지 않고 객체 자체를 변경하여 값을 할당할 수 있습니다<br />
                                    ref가 객체를 반환하도록 설정하고, API 응답을 받은 후 .value가 아닌 객체를 직접 변경하여 ref 값을 업데이트하는 방식입니다.<br />
                                    이렇게 하면 .value를 사용하지 않고도 ref의 값을 변경할 수 있습니다.
                                </p>
                            </div>
                        </div>
                        <div className='comment'>
                            <CommentArea />
                        </div>
                        <div className="subNext">
                            <div className="subNext__inner">
                                <span>
                                    <Link to="#" className="underline nextPage" prefetch="true">(next)</Link>
                                </span>
                                <h2>
                                    <Link to="#" className='nextPage' prefetch="true">
                                        <span>Movie</span>
                                    </Link>
                                    <Link to="#" className='nextPage' prefetch="true">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                            <path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                                                data-name="Right" />
                                        </svg>
                                    </Link>
                                </h2>
                                <span>
                                    <Link to="/home" className="goMain underline" prefetch="true">(main)</Link>
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

export default Movie