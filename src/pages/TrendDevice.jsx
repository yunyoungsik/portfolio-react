import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import Highlight from 'react-highlight'
import 'highlight.js/styles/atom-one-dark.css';

const TrendDevice = () => {
    // hightlight
    const codeSnippet = `
    if (selectedPhone) {
      const link = document.createElement('a');
      link.href = '\u0024{ selectedPhone.pLink }';
      link.className = 'btn__style3';
      link.innerText = '바로가기';
      link.target = '_black';
      const linkContainer = document.querySelector('.pLink1');
      linkContainer.innerHTML = '';
      linkContainer.appendChild(link);
    }
`;
    // Lenis 설정
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        })

        lenis.on('scroll', (e) => {
            // console.log(e)
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    // 가로 스크롤
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal2 = document.querySelector(".subBgSliderWrap");
        const horSections1 = gsap.utils.toArray(".section.s1");
        const horSections2 = gsap.utils.toArray(".section.s2");
        const horSections3 = gsap.utils.toArray(".section.s3");

        // 각 섹션의 실제 총 너비를 계산
        let totalWidth1 = 0;
        horSections1.forEach(section => {
            const rect = section.getBoundingClientRect();
            totalWidth1 += rect.width;
        });

        let totalWidth2 = 0;
        horSections2.forEach(section => {
            const rect = section.getBoundingClientRect();
            totalWidth2 += rect.width;
        });

        let totalWidth3 = 0;
        horSections3.forEach(section => {
            const rect = section.getBoundingClientRect();
            totalWidth3 += rect.width;
        });
        // console.log(totalWidth1 + totalWidth2 + totalWidth3)
        // console.log(totalWidth1 + totalWidth2 + totalWidth3 - window.innerWidth)

        // 첫 번째 섹션에 대한 가로 스크롤 애니메이션 정의
        gsap.to(horizontal2, {
            xPercent: -75,
            ease: "none",
            scrollTrigger: {
                trigger: ".subBgSlider",
                start: "top top",
                end: () => "+=" + (totalWidth1 + totalWidth2 + totalWidth3 - window.innerWidth),
                pin: true,
                scrub: 1,
                // snap: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
        });

        // navBar
        gsap.to("progress", {
            value: 100,
            ease: "Power1.easeInOut",
            scrollTrigger: { scrub: 0.3 }
        });
    }, [])

    // 서브 인트로애니메이션
    useEffect(() => {
        // 글자 쪼개기
        document.querySelectorAll(".split").forEach(text => {
            let newText = "";

            for (let i = 0; i < text.innerText.length; i++) {
                newText += "<span aria-hidden='true'>";

                if (text.innerText[i] === " ") {
                    newText += "&nbsp";
                } else {
                    newText += text.innerText[i];
                }

                newText += "</span>";
            }
            text.innerHTML = newText;
            text.setAttribute("aria-label", text.innerText);
        });

        // sub intro
        const subAni = gsap.timeline();

        
        subAni.fromTo(".transitionOverlay", { opacity: 0.8, zIndex: 1 }, { display: "inline-block", opacity: 0.5, duration: 1.5, ease: "Power1.easeInOut" }, "<")
        subAni.to(".subBgSliderWrap section.s1", { backdropFilter: 'blur(75px)', duration: 1.5, ease: "Power1.easeInOut" }, "<")
        subAni.to([".close.sub", ".about.sub"], { opacity: 1, duration: 1.5, ease: "Power1.easeInOut" },"<")
        subAni.fromTo(".sub__center .subTitle", { y: 72 }, { y: 0, opacity: 1, duration: 1, ease: "power1.inOut" }, "<")
        subAni.fromTo(".subBgSlider .split", { opacity: 0 }, { opacity: 1, duration: 1, ease: "power1.inOut" }, "<")

        document.querySelectorAll(".split").forEach((text) => {
            const spanTimeline = gsap.timeline({ paused: true });

            gsap.utils.toArray(text.querySelectorAll("span")).forEach((span, index) => {
                spanTimeline.fromTo(
                    span,
                    {
                        y: 30,
                        opacity: 0,
                        display: "inline-block"
                    },
                    {
                        y: 0,
                        opacity: 1,
                        ease: "Power1.easeInOut",
                    },
                    index * 0.01
                );
            });

            subAni.add(() => spanTimeline.play(), "-=0.5"); // subAni 타임라인에 추가
        });
        subAni.fromTo([".current.sub", ".scrollBar"], { y: 24 }, { y: 0, opacity: 1, duration: 1, ease: "power1.inOut" })
    }, [])

    // close 애니메이션
    useEffect(() => {
        // close
        document.querySelector(".close").addEventListener("click", function (event) {
            event.preventDefault();

            const closeAni = gsap.timeline();

            closeAni.to(".subBgSliderWrap", { xPercent: 0, duration: 1, ease: "Power1.easeInOut" });
            closeAni.to([".close.sub"], { opacity: 0, duration: 1.5, ease: "Power1.easeInOut" })
            document.querySelectorAll(".split").forEach((text) => {
                const spanTimeline = gsap.timeline({ paused: true });

                gsap.utils.toArray(text.querySelectorAll("span")).forEach((span, index) => {
                    spanTimeline.fromTo(
                        span,
                        {
                            y: 0,
                            opacity: 1,
                            display: "inline-block"
                        },
                        {
                            y: 30,
                            opacity: 0,
                            ease: "Power1.easeInOut",
                        },
                        index * 0.01
                    );
                });

                closeAni.add(() => spanTimeline.play(), "-=0.5"); // subAni 타임라인에 추가
            });
            closeAni.fromTo([".current.sub", ".scrollBar"], { y: 0 }, { y: 24, opacity: 0, duration: 1, ease: "power1.inOut" })
            closeAni.to("#subMainSlider",
                {
                    translateX: 0,
                    duration: 1,
                    backgroundColor: "white",
                    ease: "Power1.easeInOut",
                    display: "block",
                },
            );
            ScrollTrigger.matchMedia({
                "(min-width: 801px)": function () {
                    closeAni.fromTo(".subBgSlider", { backgroundSize: "100%" }, { backgroundSize: "150%", duration: 1, ease: "Power1.easeInOut" }, "<")
                },
                "(max-width: 800px)": function () {

                }
            })
            closeAni.to(".subBgSliderWrap section", { backdropFilter: 'blur(0px)', duration: 2, ease: "Power1.easeInOut" })
            closeAni.to(".transitionOverlay", { opacity: 0, duration: 2, ease: "Power1.easeInOut" }, "<")
            setTimeout(() => {
                closeAni.eventCallback("onComplete", () => {
                    window.location.href = "/";
                });
            }, 500);
        });
    }, [])

    // about
    useEffect(() => {
        const about = document.querySelector(".about");

        about.addEventListener("click", (event) => {
            event.preventDefault();

            const aboutAni = gsap.timeline();

            aboutAni.to([".close.sub", ".about.sub"], { opacity: 0, duration: 1.5, ease: "Power1.easeInOut" },"<")
            aboutAni.to([".current.sub", ".scrollBar"], { y: 24, opacity: 0, duration: 1, ease: "power1.inOut" }, "<")
            aboutAni.to(".subTransitionOverlay", { display: "block", opacity: 1, duration: 2, ease: "Power1.easeInOut" })
            setTimeout(() => {
                aboutAni.eventCallback("onComplete", () => {
                    window.location.href = "/about";
                });
            }, 500);
        })
    }, [])

    return (
        <main id='main' className='main sub'>
            <Link to="/" className="close sub">
                <svg width="16" height="16" viewBox="0 0 24 24" data-v-c5fc2e64="">
                    <path fill="currentColor"
                        d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"
                        data-v-c5fc2e64=""></path>
                </svg>
            </Link>
            <Link to="/about" className="about sub underline">About</Link>
            <div className="subPage">
                <span className="current sub">
                    <span className="pageIndex 01">01</span>
                </span>
            </div>
            <div className="scrollBar">
                <progress max="100" value="0"></progress>
            </div>

            <div className="mainSlider" id="subMainSlider">
                <div className="mainSlider__top">
                    <h1 className="logo">
                        <Link to="/">Y</Link>
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
                                <Link to="/"><img src="https://images.unsplash.com/photo-1659469378420-e68c6ee21a28?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="main img 01" /></Link>
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

            <div className="subBgSlider">
                <div className="subBgSliderWrap">
                    <section className='section s1'>
                        <div className="sub__center">
                            <div className="text">
                                <div className="titleWrap">
                                    <h5 className="subTitle split">
                                        Trend Device
                                    </h5>
                                </div>
                                <div className="subDesc split">
                                    Trend Device는 직관적이고 사용하기 편리한 인터페이스를 제공하여<br />
                                    사용자가 원하는 휴대폰 모델을 선택하고, 선택한 모델들을 한눈에 비교할 수 있도록 합니다.<br />
                                    각 휴대폰 모델에는 사진, 기술 사양, 가격 등의 정보가 제공되어<br />
                                    사용자가 원하는 정보를 쉽게 찾을 수 있습니다.
                                </div>
                            </div>
                        </div>
                        <div className="transitionOverlay"></div>
                    </section>
                    <section className='section s2'>
                    </section>
                    <section className='section s3'>
                        <div className="pageSection">
                            #1
                        </div>
                        <div className="info">
                            <div className="info__inner">
                                <h2 className='mPageSection'>#1</h2>
                                <h2>Website</h2>
                                <div className="coding">
                                    <h3>(coding)</h3>
                                    <p>PHP, Javascript</p>
                                </div>
                                <div className="workTime">
                                    <h3>(workTime)</h3>
                                    <p>2 Weeks</p>
                                </div>
                                <div className="link">
                                    <div className="link1">
                                        <Link to="http://trenddevice2023.dothome.co.kr/TDsite/php/main/main.php" target="_blank"
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
                                    <Link to="https://github.com/yunyoungsik/Trend-Device" target="_blank" className="underline">
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
                                    자바스크립트와 GSAP, Scroll Trigger를 사용하여 슬라이드 및 각 섹션에 이미지와 어울리는 움직임을 구현하고자 했습니다.
                                </p>
                                <span>상품페이지</span>
                                <p>
                                    PHP의 foreach를 이용하여 핸드폰 정보를 리스트 형태로 생성합니다. 각 핸드폰 정보에 대한 태그를 생성하고, 이미지와 이름을 링크에 표시하여 핸드폰의 제목, 간단한 설명, 가격 등을 리스트로 보여줍니다.
                                </p>
                                <span>비교하기</span>
                                <p>
                                    드롭다운 메뉴 변경 시, 선택된 값(this.value)을 기반으로 데이터 필터링하여 해당 정보를 화면에 표시합니다. 선택된 옵션 값에 따라 데이터를 필터링하고, 해당 정보를 화면에 표시하는 방식으로 작동합니다.
                                </p>
                            </div>
                        </div>
                        <div className="trouble">
                            <div className="trouble__inner">
                                <h2>Trouble Shooting</h2>
                                <h3>문제</h3>
                                <p>비교 페이지에 접속했을 때 'a'와 'img' 요소에 초기값이 없는 문제</p>
                                <h3>해결</h3>
                                <p>
                                    초기값이 없는 상태의 'a'와 'img' 요소를 조건부 렌더링으로 처리
                                </p>
                                <Highlight className="javascript">
                                    {codeSnippet}
                                </Highlight>
                                <p>
                                    문제는 데이터 로딩 전에 정보를 사용하려고 했던 것이었습니다.<br />
                                    조건부 렌더링을 사용하여 데이터 존재 여부를 확인하고, 데이터가 있는 경우에만 코드를 실행하여 에러를 방지했습니다.
                                </p>
                            </div>
                        </div>
                        <div className="subNext">
                            <div className="subNext__inner">
                                <span>
                                    <Link to="/movie" className="underline">(next)</Link>
                                </span>
                                <h2>
                                    <Link to="/movie">
                                        <span>Movie</span>
                                    </Link>
                                    <Link to="/movie">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                            <path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                                                data-name="Right" />
                                        </svg>
                                    </Link>
                                </h2>
                                <span>
                                    <Link to="/" className="underline">(prev)</Link>
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

export default TrendDevice