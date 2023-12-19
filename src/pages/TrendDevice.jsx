import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TrendDevice = () => {
    gsap.registerPlugin(ScrollTrigger);

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

        subAni.to([".close.sub", ".about.sub"], { opacity: 1, duration: 1.5, ease: "Power1.easeInOut" })
        subAni.fromTo(".transitionOverlay", { opacity: 0.8, zIndex: 1 }, { display: "inline-block", opacity: 0.8, duration: 1.5, ease: "Power1.easeInOut" }, "<")
        subAni.fromTo(".sub__center .subTitle", { y: 72 }, { y: 0, opacity: 1, duration: 1, ease: "power1.inOut" }, "<")
        subAni.fromTo(".sub__center .subTitle", { y: 72 }, { y: 0, opacity: 1, duration: 1, ease: "power1.inOut" }, "<")
        subAni.fromTo(".bgSliderWrap.sub .split", { opacity: 0 }, { opacity: 1, duration: 1, ease: "power1.inOut" }, "<")

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

    // 슬라이더
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let sections = gsap.utils.toArray("#wrap .parallax__item");
        let center = gsap.utils.toArray("#wrap .centerSlider");
        let page = gsap.utils.toArray("#wrap .pageIndex");
        let title = gsap.utils.toArray("#wrap .title");
        let desc = gsap.utils.toArray("#wrap .desc");

        let animation = gsap.timeline({
            scrollTrigger: {
                trigger: "#parallax__cont",
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: "+=5500",
            }
        });

        ScrollTrigger.matchMedia({
            "(min-width: 801px)": function () {
                animation.to(sections, { xPercent: -100 * (sections.length - 1), ease: "none" }, 0)
                    .to(center, { y: -1080 * (center.length - 1), ease: "none" }, 0)
                    .to(desc, { y: -24 * (desc.length - 1), ease: "none" }, 0)
                    .to(page, { y: -24 * (page.length - 1), ease: "none" }, 0)
                    .to(title, { y: -72 * (title.length - 1), ease: "none" }, 0);
            },
            "(max-width: 800px)": function () {
                animation.to(sections, { xPercent: -100 * (sections.length - 1), ease: "none" }, 0)
                    .to(center, { y: -1080 * (center.length - 1), ease: "none" }, 0)
                    .to(desc, { y: -22.39 * (desc.length - 1), ease: "none", toggleActions: 'play none none reverse', }, 0)
                    .to(page, { y: -22.39 * (page.length - 1), ease: "none", toggleActions: 'play none none reverse', }, 0)
                    .to(title, { y: -43 * (title.length - 1), ease: "none", toggleActions: 'play none none reverse', }, 0);
            }
        });
    }, []);

    // navBar
    useEffect(() => {
        gsap.to("progress", {
            value: 100,
            ease: "Power1.easeInOut",
            scrollTrigger: { scrub: 0.3 }
        });
    })

    // close 애니메이션
    useEffect(() => {
        // close
        document.querySelector(".close").addEventListener("click", function (event) {
            event.preventDefault();
            const close = gsap.to("#subMainSlider",
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
                    gsap.fromTo(".bgSliderWrap.sub .slider", { backgroundSize: "100%" }, { backgroundSize: "150%", duration: 1, ease: "Power1.easeInOut" }, "<")
                },
                "(max-width: 800px)": function () {

                }
            })
            gsap.to(".transitionOverlay", { opacity: 0, duration: 3, ease: "Power1.easeInOut" })

            close.play();

            setTimeout(() => {
                window.location.href = "/";
            }, (close.duration() + 1) * 1000);
        });
    }, [])

    return (
        <main id='main'>
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

            <div className="bgSlider" id="parallax__cont">
                <div className="bgSliderWrap sub">
                    <div className="slider s1 parallax__item sub">
                        <div className="sub__center">
                            <div className="text">
                                <div className="titleWrap">
                                    <div className="subTitle split">
                                        Trend Device
                                    </div>
                                </div>
                                <div className="subDesc split">
                                    Trend Device는 직관적이고 사용하기 편리한 인터페이스를 제공하여 사용자가 원하는 휴대폰 모델을 선택하고, 선택한 모델들을 한눈에 비교할 수 있도록 합니다.<br />
                                    각 휴대폰 모델에는 사진, 기술 사양, 가격 등의 정보가 제공되어 사용자가 원하는 정보를 쉽게 찾을 수 있습니다.
                                </div>
                            </div>
                        </div>
                        <div className="transitionOverlay"></div>
                    </div>
                    <div className="slider s1 parallax__item sub"></div>
                    <div className="slider s1 parallax__item sub">
                        <div className="sub__center">
                            <div className="section">
                                #1
                            </div>
                            <div className="info">
                                <div className="info__inner">
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
                        </div>
                        <div className="transitionOverlay"></div>
                    </div>
                    <div className="slider s1 parallax__item sub">
                        <div className="sub__center">
                            <div className="desc">
                                <div className="desc__inner">
                                    <h2>Description</h2>
                                    <span>메인</span>
                                    <p>
                                        슬라이드는 Javascript를 사용하여 슬라이드 기능을 구현하고 GSAP와 Scroll Triger를 사용하여 각 섹션에 이미지와 어울리는 움직임을 표현하려고 했습니다.
                                    </p>
                                    <span>상품페이지</span>
                                    <p>
                                        PHP로 작성된 반복문(foreach)을 사용하여 $categoryResult 배열의 각 요소를 순회하며 핸드폰 정보를 리스트로 생성합니다.<br />
                                        $categoryResult 배열에 있는 각 요소($phone)를 하나씩 가져와서 반복하고 각 반복 요소마다 태그를 생성하여 리스트 아이템을 만듭니다.<br />
                                        태그를 이용하여 핸드폰 정보 페이지로 연결되는 링크를 생성하고 이미지($phone['pImgFile'])와 해당 제품의 이름($phone['phoneTitle'])을 이미지
                                        태그()의 src와 alt 속성에 표시합니다.<br />
                                        foreach 루프를 사용하여 $categoryResult 배열에 있는 각 요소($phone)를 하나씩 가져와서 반복합니다.<br />
                                        핸드폰의 제목, 간단한 설명, 그리고 가격등 을 안에 가져와 태그로 표시합니다.
                                    </p>
                                    <span>비교하기</span>
                                    <p>
                                        드롭다운 메뉴에서 변경 사항이 감지되면 이벤트를 트리거합니다.<br />
                                        이벤트는 선택된 옵션의 값(this.value)을 기반으로 데이터를 필터링하고,해당 데이터에서 선택된 값을 기준으로 정보를 가져와 화면에 표시하는 역할을 합니다.<br />
                                        이벤트는 선택된 옵션의 값(this.value)을 기반으로 데이터를 필터링하고, 해당 데이터에서 선택된 값을 기준으로 정보를 가져와 화면에 표시합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="transitionOverlay"></div>
                    </div>
                    <div className="slider s1 parallax__item sub">
                        <div className="sub__center">
                            <div className="trouble">
                                <div className="trouble__inner">
                                    <h2>Trouble Shooting</h2>
                                    <h3>문제</h3>
                                    <p>비교 페이지에 처음 접속했을 때 'a'와 'img' 요소에 초기값이 없어서 문제가 발생했습니다.</p>
                                    <h3>해결</h3>
                                    <p>
                                        처음 접속 시에는 초기값이 없는 상태에서 비교 페이지에 들어가면서 'a'와 'img' 요소에 데이터를
                                        추가해야 했습니다.
                                    </p>
                                    <pre><code className="language-js">
                                        {/* if (selectedPhone) {
  const link = document.createElement('a');
                                        link.href = `${selectedPhone.pLink}`;
                                        link.className = 'btn__style3';
                                        link.innerText = '바로가기';
                                        link.target = '_black';
                                        const linkContainer = document.querySelector('.pLink1');
                                        linkContainer.innerHTML = '';
                                        linkContainer.appendChild(link);
  } */}
                                    </code></pre>
                                    <p>
                                        · 조건부 렌더링으로 에러 방지<br />
                                        문제 원인은 데이터가 로드되기 전에 해당 정보를 사용하려는 것에서 시작됐습니다.<br />
                                        이를 해결하기 위해 코드에서 &lbrace;channelDetail &&&rbrace;를 사용하여 조건부 렌더링을 수행했습니다.<br />
                                        &lbrace;channelDetail &&&rbrace;를 통해 channelDetail이 존재하는지 여부를 확인하고, 존재할 때만 코드를 실행함으로써 에러를 방지했습니다.<br />
                                    </p>
                                </div>
                            </div>
                            <div className="subNext">
                                <div className="subNext__inner">
                                    <span>
                                        <Link to="/movie" className="underline">(next)</Link>
                                    </span>
                                    <h2>
                                        <Link to="/movie" className="underline">
                                            <span>Movie</span>
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
                        </div>
                        <div className="transitionOverlay"></div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default TrendDevice