import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import Lenis from '@studio-freight/lenis'
import { Link } from 'react-router-dom';

const About = () => {
    // lenis
    useEffect(() => {
        const lenis = new Lenis({
            duration: 3,
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

    // hover
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

        const email = document.querySelector(".emailLink");

        // hover
        email.addEventListener("mouseover", function () {
            const splitTexts = document.querySelectorAll(".split.text");
            const windowWidth = window.innerWidth;

            splitTexts.forEach((text) => {
                const spanTimeline = gsap.timeline({ paused: true });

                gsap.utils.toArray(text.querySelectorAll("span")).forEach((span, index) => {
                    let yPos = 0;

                    if (windowWidth <= 800) {
                        yPos = -50;
                    } else {
                        yPos = -75;
                    }

                    spanTimeline.fromTo(
                        span,
                        {
                            y: 0,
                            opacity: 1,
                            display: "inline-block"
                        },
                        {
                            y: yPos,
                            opacity: 1,
                            ease: "Power1.easeInOut"
                        },
                        index * 0.02
                    );
                });
                spanTimeline.play();
            });

            gsap.fromTo(".svg > .svg1", { opacity: 1, scale: 1 }, { opacity: 1, scale: 0, transformOrigin: "100% 0%", ease: "Power1.easeInOut" });
            gsap.fromTo(".svg > .svg2", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, transformOrigin: "0% 100%", ease: "Power1.easeInOut" });
        });

        // out
        email.addEventListener("mouseout", function () {
            document.querySelectorAll(".split.text").forEach((text) => {
                const spanTimeline = gsap.timeline({ paused: true });

                gsap.utils.toArray(text.querySelectorAll("span")).forEach((span, index) => {
                    spanTimeline.fromTo(
                        span,
                        {
                            y: -75,
                            opacity: 1,
                            display: "inline-block"
                        },
                        {
                            y: 0,
                            opacity: 1,
                            ease: "Power1.easeInOut",
                        },
                        index * 0.01
                    );
                    spanTimeline.play();
                });
            });
            gsap.fromTo(".svg > .svg2", { opacity: 1, scale: 1 }, { opacity: 0, scale: 0, transformOrigin: "0% 100%", ease: "Power1.easeInOut" })
            gsap.fromTo(".svg > .svg1", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, transformOrigin: "100% 0%", ease: "Power1.easeInOut" })
        })
    }, [])

    //about intro
    useEffect(() => {
        const aboutIntro = gsap.timeline();

        aboutIntro.to("#about #header .logo", { opacity: 1, duration: 2, ease: "power1.inOut", delay: 1 })
        aboutIntro.to(["#about #header .logo span", "#about #header .aboutClose"], { opacity: 1, duration: 2, ease: "power1.inOut" })
        aboutIntro.to(".aboutCenter h2 ", { opacity: 1}, "<")

        document.querySelectorAll(".split.aboutLogo").forEach((text) => {
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
                    index * 0.05
                );
            });

            aboutIntro.add(() => spanTimeline.play(), "-=0.5"); // subAni 타임라인에 추가
        });

        document.querySelectorAll(".split.aboutTitle").forEach((text) => {
            const spanTimeline = gsap.timeline({ paused: true });

            gsap.utils.toArray(text.querySelectorAll("span")).forEach((span, index) => {
                spanTimeline.fromTo(
                    span,
                    {
                        y: 100,
                        opacity: 0,
                        display: "inline-block"
                    },
                    {
                        y: 0,
                        opacity: 1,
                        ease: "Power1.easeInOut",
                    },
                    index * 0.05
                );
            });

            aboutIntro.add(() => spanTimeline.play(), "-=0.5"); // subAni 타임라인에 추가
        });
        aboutIntro.to(".aboutCenter p", {opacity: 1, duration:1, ease: "power1.inOut"})
    })

    // close
    useEffect(() => {
        document.querySelector(".aboutClose").addEventListener("click", function (event) {
            event.preventDefault();
            const closeAni = gsap.timeline();

            closeAni.to(".aboutClose", { opacity: 0, duration: 1.5, ease: "Power1.easeInOut" })
            document.querySelectorAll(".split.aboutLogo").forEach((text) => {
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
                        index * 0.05
                    );
                });
    
                closeAni.add(() => spanTimeline.play(), "-=0.5"); // subAni 타임라인에 추가
            });
        
        document.querySelectorAll(".split.aboutTitle").forEach((text) => {
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
                        y: 100,
                        opacity: 0,
                        ease: "Power1.easeInOut",
                    },
                    index * 0.05
                );
            });

            closeAni.add(() => spanTimeline.play(), "-=0.5"); // subAni 타임라인에 추가
        });
        closeAni.to(["#about #header .logo", ".aboutCenter p"], { opacity: 0, duration: 2, ease: "power1.inOut"})
        closeAni.to(".transitionOverlay.about", { display: "block", opacity: 1, duration: 2, ease: "Power1.easeInOut" }, "<")
            setTimeout(() => {
                closeAni.eventCallback("onComplete", () => {
                    window.location.href = "/";
                });
            }, 500);
        })  
    })

    return (
        <div id='about'>
            <header id="header">
                <h1 className="logo">
                    <Link to="/">Y<span className='split aboutLogo'>unYoungsik</span></Link>
                </h1>
                <div className="aboutClose">
                    <Link to="/" className="aboutClose underline">Close</Link>
                </div>
            </header>
            <main id='main'>
                <div className="aboutSlideWrap">
                    <div className="aboutSlider"></div>
                    <div className="aboutCenter">
                        <p>(YunYoungsik)</p>
                        <h2>
                            <span className='split aboutTitle'>About</span>
                        </h2>
                    </div>
                    <div className="aboutDesc">
                        <p>
                            자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글<br />
                            자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글
                        </p>
                    </div>
                    <div className="aboutText">
                        <div className="aboutService">
                            <div className="aboutService__inner">
                                <div className="aboutTitle">
                                    (services)
                                </div>
                                <div className="aboutSkill">
                                    <div className="markup">
                                        <h2>Markup Languae</h2>
                                        <p>
                                            HTML5, CSS<br />
                                            Javascript, PHP
                                        </p>
                                    </div>
                                    <div className="tool">
                                        <h2>Tool</h2>
                                        <p>
                                            VScode, Figma, Github,<br />
                                            Git, Filezila, Photoshop,<br />
                                            Illustrator, Slack, Notion
                                        </p>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className="aboutContact">
                            <div className="aboutContact__social">
                                <div className="title">
                                    (contact)
                                </div>
                                <div className="title2">
                                    social
                                </div>
                                <div className="social">
                                    <span>Github</span>
                                    <Link to="https://www.github.com/yunyoungsik">github.com/yunyoungsik</Link>
                                </div>
                            </div>
                            <div className="aboutContact__email">
                                <div className="title">
                                </div>
                                <div className="title2">
                                    email
                                </div>
                                <div className="email">
                                    <Link to="mailto:yunyoungsik@kakao.com">yunyoungsik@kakao.com</Link>
                                </div>
                            </div>
                        </div>
                        <div className="aboutContact__bottom">
                            <div className="aboutImg">
                            </div>
                            <div className="aboutEmail">
                                <Link to="mailto:yunyoungsik@kakao.com" className="emailLink underline">
                                    <div className="text">
                                        <div className="textWrap">
                                            <p className="split text">Say Hi</p>
                                            <p className="split text">Say Hi</p>
                                        </div>
                                    </div>
                                    <div className="svg">
                                        <svg className="svg1" width="45" height="45" viewBox="0 0 45 45" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" data-v-50e346e1="">
                                            <path
                                                d="M2.66949 45L0 42.3305L38.5169 3.81356H3.05085V0H45V41.9492H41.1864V6.48305L2.66949 45Z"
                                                fill="currentColor" data-v-50e346e1=""></path>
                                        </svg>
                                        <svg className="svg2" width="45" height="45" viewBox="0 0 45 45" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" data-v-50e346e1="">
                                            <path
                                                d="M2.66949 45L0 42.3305L38.5169 3.81356H3.05085V0H45V41.9492H41.1864V6.48305L2.66949 45Z"
                                                fill="currentColor" data-v-50e346e1=""></path>
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="transitionOverlay about"></div>
                </div>
            </main>
        </div>
    )
}

export default About