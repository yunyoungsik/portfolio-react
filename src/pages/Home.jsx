import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

const Home = () => {
    // 마우스
    useEffect(() => {

        const mouseCursor = document.querySelector(".mouse__cursor");

        window.addEventListener("mousemove", (e) => {
            gsap.to(mouseCursor, { duration: 1, left: e.screenX + 0, top: e.screenY + 0 });
        });

        document.querySelectorAll(".mouse__text").forEach(span => {
            span.addEventListener("mouseenter", () => {
                mouseCursor.classList.add("active");
            });
            span.addEventListener("mouseleave", () => {
                mouseCursor.classList.remove("active");
            });
        })
    })

    // lenis
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

    // 슬라이드
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let sections = gsap.utils.toArray(".bgSliderWrap .parallax__item");
        let center = gsap.utils.toArray(".centerSliderWrap .centerSlider");
        let page = gsap.utils.toArray(".current .pageIndex");
        let title = gsap.utils.toArray(".titleWrap .title");
        let desc = gsap.utils.toArray(".descWrap .desc");

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

        return () => {
            // ScrollTrigger 해제
            ScrollTrigger.getAll().forEach(trigger => {
                trigger.kill();
            });
            // GSAP 애니메이션 중지 또는 제거
            animation.kill();
        };
    })

    // 화면전환
    useEffect(() => {
        // 글자 쪼개기
        document.querySelectorAll(".split").forEach((text) => {
            // let theText = text.innerText;
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

        // transition
        const subLinks = document.querySelectorAll(".subLink");

        subLinks.forEach((subLink) => {
            subLink.addEventListener("click", function (event) {
                event.preventDefault();

                const pageTransition = gsap.timeline({
                    onComplete: () => {
                        if (subLink.classList.contains("td")) {
                            window.location.href = "./td";
                        } else if (subLink.classList.contains("yt")) {
                            window.location.href = "./youtube";
                        } else if (subLink.classList.contains("mv")) {
                            window.location.href = "./movie";
                        } else if (subLink.classList.contains("ki")) {
                            window.location.href = "/kicoff";
                        } else if (subLink.classList.contains("bl")) {
                            window.location.href = "/blog";
                        }
                    }
                });

                setTimeout(() => {
                    pageTransition.to(
                        ".center__img",
                        {
                            opacity: 0,
                            duration: 1,
                            ease: "Power1.easeInOut",
                            delay: 0,
                        },
                        ">"
                    );

                    document.querySelectorAll(".split").forEach((text) => {
                        const spanTimeline = gsap.timeline({ paused: true });

                        gsap.utils
                            .toArray(text.querySelectorAll("span"))
                            .forEach((span, index) => {
                                spanTimeline.fromTo(
                                    span,
                                    {
                                        y: 0,
                                        opacity: 1,
                                        display: "inline-block",
                                    },
                                    {
                                        y: -72,
                                        opacity: 0,
                                        stagger: 0.051,
                                        ease: "Power1.easeInOut",
                                    },
                                    index * 0.03
                                );
                            });

                        pageTransition.add(() => spanTimeline.play(), "-=0.5");
                    });

                    pageTransition.to(
                        ".descSlider",
                        {
                            opacity: 0,
                            duration: 1,
                            ease: "expo.out",
                            delay: 0,
                        },
                        "<"
                    );
                    pageTransition.to(
                        ".logo > a",
                        {
                            opacity: 0,
                            yPercent: -110,
                            duration: 1,
                            ease: "expo.out",
                            delay: 0,
                        },
                        "<"
                    );
                    pageTransition.to(
                        [".page > span", ".scroll__text > p"],
                        {
                            opacity: 0,
                            yPercent: 110,
                            duration: 1,
                            ease: "expo.out",
                            delay: 0,
                        },
                        "<"
                    );
                    pageTransition.to(
                        "#mainSlider",
                        {
                            xPercent: -100,
                            duration: 1.3,
                            backgroundColor: "black",
                            ease: "power4.inOut",
                            display: "none",
                            delay: 0,
                        },
                        "<"
                    );
                    pageTransition.to(
                        ".bgSliderWrap > a > .slider",
                        {
                            scale: 1,
                            duration: 0.8,
                            ease: "Power1.easeInOut",
                            delay: 0,
                        },
                        "<"
                    );
                    pageTransition.to(".transitionOverlay", { display: "inline-block", duration: 1.5, ease: "Power1.easeInOut", opacity: 0.8 }, "<")
                });
            }, 1000);
        });
    }, [])

    return (
        <main id='main'>
            <Link to="/about" className="about underline">About</Link>
            <div className="mouse__cursor">View</div>

            <div className="mainSlider" id="mainSlider">
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
                                    <Link to="#" className="td subLink split">Trend Device</Link>
                                </h2>
                                <h2 className="title">
                                    <Link to="#" className="yt subLink split">YouTube</Link>
                                </h2>
                                <h2 className="title">
                                    <Link to="#" className="mv subLink split">Movie</Link>
                                </h2>
                                <h2 className="title">
                                    <Link to="#" className="ki subLink split">Kickoff</Link>
                                </h2>
                                <h2 className="title">
                                    <Link to="#" className="bl subLink split">BLOG</Link>
                                </h2>
                            </div>
                        </div>
                        <div className="descSlider">
                            <div className="descWrap">
                                <p className="desc">
                                    PHP를 이용하여 작업한 사이트입니다.
                                </p>
                                <p className="desc">
                                    React를 이용하여 작업한 사이트입니다.
                                </p>
                                <p className="desc">
                                    Vue를 이용하여 작업한 사이트입니다.
                                </p>
                                <p className="desc">
                                    4를 이용하여 작업한 사이트입니다.
                                </p>
                                <p className="desc">
                                    5를 이용하여 작업한 사이트입니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="center__img mouse__text">
                        <div className="centerSliderWrap">
                            <div className="centerSlider s1 main">
                                <Link to="#" className="td subLink"><img src="https://images.unsplash.com/photo-1659469378420-e68c6ee21a28?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="main img 01" /></Link>
                            </div>
                            <div className="centerSlider s2 main">
                                <Link to="#" className="yt subLink"><img src="https://images.unsplash.com/photo-1659469378420-e68c6ee21a28?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="main img 02" /></Link>
                            </div>
                            <div className="centerSlider s3 main">
                                <Link to="#" className="mv subLink"><img src="https://images.unsplash.com/photo-1659469378420-e68c6ee21a28?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="main img 03" /></Link>
                            </div>
                            <div className="centerSlider s4 main">
                                <Link to="#" className="ki subLink"><img src="https://images.unsplash.com/photo-1659469378420-e68c6ee21a28?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="main img 04" /></Link>
                            </div>
                            <div className="centerSlider s5 main">
                                <Link to="#" className="bl subLink"><img src="https://images.unsplash.com/photo-1659469378420-e68c6ee21a28?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="main img 05" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainSlider__bottom">
                    <div className="page">
                        <span className="current">
                            <span className="pageIndex 01">01</span>
                            <span className="pageIndex 02">02</span>
                            <span className="pageIndex 03">03</span>
                            <span className="pageIndex 04">04</span>
                            <span className="pageIndex 05">05</span>
                        </span>
                        <span className="pageLine">―</span>
                        <span>05</span>
                    </div>
                    <div className="scroll__text">
                        <p>(Scroll)</p>
                    </div>
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
                <div className="bgSliderWrap mouse__text">
                    <Link to="#" className="td parallax__item subLink">
                        <div className="slider s1"></div>
                    </Link>
                    <Link to="#" className="yt parallax__item subLink">
                        <div className="slider s2"></div>
                    </Link>
                    <Link to="#" className="mv parallax__item subLink">
                        <div className="slider s3"></div>
                    </Link>
                    <Link to="#" className="ki parallax__item subLink">
                        <div className="slider s4"></div>
                    </Link>
                    <Link to="#" className="bl parallax__item subLink">
                        <div className="slider s5"></div>
                    </Link>
                </div>
            </div>
            <div className="transitionOverlay main"></div>
        </main>
    )
}

export default Home