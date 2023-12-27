import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Intro = () => {
    // 인트로 애니메이션
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        // center Text
        const ani = gsap.timeline();

        ani.set(".intro__popup .center__text", { textAlign: "center", position: "absolute", top: "50%", left: "50%", translateX: "-50%", translateY: "-50%", zIndex: 1 });
        ani.set(".intro__popup .mainSlider__center", { height: "100%" });
        ani.set(".intro__popup .center__img", { width: "100%", height: "100vh" });
        ani.set(".intro__popup .bgSliderWrap", { width: "100%" });

        ScrollTrigger.matchMedia({
            "(min-width: 801px)": function () {
                ani.fromTo(".intro__popup .titleWrap", { y: 72, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
                    .fromTo(".intro__popup .center__img", { scale: 1 }, { scale: 0.5, duration: 2, ease: "power1.inOut" })
                    .to(".intro__popup .center__img", { scale: 0.6, duration: 3, ease: "power1.inOut" })
                    .to(".intro__popup .center__img", { width: 250, height: 410, scale: 1, duration: 3, ease: "power1.inOut" })
                    .fromTo(".intro__popup .mainSlider", { width: "100%" }, { width: "80%" })
                    .to(".intro__popup .titleWrap h2", { y: -72 })
                    .to(".intro__popup .center__text", { xPercent: -200, opacity: 0, duration: 1, ease: "power1.inOut" })
                    .to(".intro__popup .center__text", { textAlign: "left", position: "relative", top: "auto", left: "auto", y: 0, x: 0, xPercent: 0, yPercent: 0, })

                    .fromTo([".intro__popup .mainSlider__top", ".intro__popup .mainSlider__bottom"], { display: "none" }, { display: "flex" })
                    .to(".intro__popup .mainSlider__center", { height: "60%" })

                    .to(".intro__popup .center__text", { opacity: 1 })
                    .fromTo(".intro__popup .descWrap", { y: 24, opacity: 0, visibility: "hidden" }, { y: 0, opacity: 1, visibility: "visible", duration: 1, ease: "power1.inOut" })

                    .fromTo([".intro__popup .pause", ".intro__popup .scroll__arrow"], { xPercent: 100, opacity: 0 }, { xPercent: -100, opacity: 1, ease: "power1.inOut" })
                    .fromTo(".intro__popup .logo", { opacity: 0 }, { opacity: 1, ease: "power1.inOut" })
                    .fromTo([".intro__popup .page", ".intro__popup .scroll__text"], { yPercent: 100, opacity: 0 }, { yPercent: -100, opacity: 1, ease: "power1.inOut" })
            },
            "(max-width: 800px)": function () {
                ani.fromTo(".intro__popup .titleWrap", { y: 72, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
                    .fromTo(".intro__popup .center__img", { scale: 1 }, { scale: 0.5, duration: 2, ease: "power1.inOut" })
                    .to(".intro__popup .center__img", { scale: 0.6, duration: 3, ease: "power1.inOut" })
                    .to(".intro__popup .center__img", { width: 250, height: 410, scale: 1, duration: 3, ease: "power1.inOut" })
                    .fromTo(".intro__popup .mainSlider", { width: "100%" }, { width: "100%" })
                    .to(".intro__popup .titleWrap h2", { y: -42 })
                    // .to(".intro__popup .center__text", { xPercent: -200, opacity: 0, duration: 1, ease: "power1.inOut" })
                    // .to(".intro__popup .center__text", { textAlign: "left", position: "relative", top: "auto", left: "auto", y: 0, x: 0, xPercent: 0, yPercent: 0, })
                    // .to(".intro__popup .center__text", { opacity: 1 })
                    .fromTo(".intro__popup .descWrap", { y: 24, opacity: 0, visibility: "hidden" }, { y: 0, opacity: 1, visibility: "visible", duration: 1, ease: "power1.inOut" })
                    .fromTo([".intro__popup .mainSlider__top", ".intro__popup .mainSlider__bottom"], { display: "none" }, { display: "flex" })
                    .to(".intro__popup .mainSlider__center", { height: "60%" })
                    .fromTo([".intro__popup .pause", ".intro__popup .scroll__arrow"], { xPercent: 100, opacity: 0 }, { xPercent: -100, opacity: 1, ease: "power1.inOut" })
                    .fromTo(".intro__popup .logo", { opacity: 0 }, { opacity: 1, ease: "power1.inOut" })
                    .fromTo([".intro__popup .page", ".intro__popup .scroll__text"], { yPercent: 100, opacity: 0 }, { yPercent: -100, opacity: 1, ease: "power1.inOut" })
            }
        });
        // center Img
        const innerAnimation = gsap.timeline();

        gsap.set(".intro__popup .centerSliderWrap", { display: "flex", width: "600%", height: "100vh" });
        gsap.set(".intro__popup .centerSliderWrap>.centerSlider", { xPercent: 100, opacity: 0 });

        gsap.utils.toArray(".centerSlider.intro").forEach((img, index) => {
            if (index !== 0) {
                innerAnimation.to(img, {
                    xPercent: -100 * index,
                    opacity: 1,
                    duration: 1,
                    ease: "power1.inOut",
                    delay: index * 0.5
                });
            }
        });

        innerAnimation.eventCallback("onComplete", function () {
            setTimeout(function () {
                window.location.href = "/";
            }, 2000);
        });
    }, [])

    return (
        <main id='main'>
            <div className="intro__popup">
                <Link to="/" className="about underline">About</Link>
                <div className="mainSlider">
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
                                        Portfolio
                                    </h2>
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
                            <div className="centerSliderWrap">
                                <div className="centerSlider s1 intro">

                                </div>
                                <div className="centerSlider s2 intro">

                                </div>
                                <div className="centerSlider s3 intro">

                                </div>
                                <div className="centerSlider s4 intro">

                                </div>
                                <div className="centerSlider s5 intro">

                                </div>
                                <div className="centerSlider s1 intro">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mainSlider__bottom">
                        <div className="page">
                            <span className="current">
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
                <div className="bgSlider">
                    <div className="bgSliderWrap">
                        <div className="slider s1"></div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Intro