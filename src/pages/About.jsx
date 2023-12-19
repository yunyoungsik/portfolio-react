import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const About = () => {
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
            const splitTexts = document.querySelectorAll(".split");
            const windowWidth = window.innerWidth;

            splitTexts.forEach((text) => {
                const spanTimeline = gsap.timeline({ paused: true });

                gsap.utils.toArray(text.querySelectorAll("span")).forEach((span, index) => {
                    let yPos = 0;
                    let animOpacity = 1;

                    if (windowWidth <= 80) {
                        yPos = -50;
                        animOpacity = 0.5;
                    } else {
                        yPos = -75;
                        animOpacity = 1;
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
                            opacity: animOpacity,
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
            document.querySelectorAll(".split").forEach((text) => {
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

    return (
        <div id='about'>
            <header id="header">
                <h1 className="logo">
                    <Link to="/">YunYoungsik</Link>
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
                        <h2>About</h2>
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
                                            <p className="split">Say Hi</p>
                                            <p className="split">Say Hi</p>
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
                </div>
            </main>
        </div>
    )
}

export default About