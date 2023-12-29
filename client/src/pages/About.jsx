import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import { aboutClose } from '../assets/script/aboutClose';
import { aboutSmooth } from '../assets/script/aboutSmooth';
import { aboutIntro } from '../assets/script/aboutIntro';
import { splint } from '../assets/script/splint';
import { aboutHover } from '../assets/script/aboutHover';

const About = () => {

    // script
    useEffect(() => {
        aboutSmooth();
        splint();
        aboutClose();
        aboutIntro();
        aboutHover();
    }, []);

    return (
        <div id='about'>
            <header id="header">
                <h1 className="logo">
                    <Link to="/home" className='goMain'>Y<span className='split aboutLogo'>unYoungsik</span></Link>
                </h1>
                <div className="aboutClose goMain">
                    <Link to="/home" className="underline">Close</Link>
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
                                    <Link to="https://www.github.com/yunyoungsik" target='_blank'>github.com/yunyoungsik</Link>
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