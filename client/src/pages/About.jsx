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
                            다양한 기술을 활용하여 창의적이고 사용자 친화적인 솔루션을 제공하는 프론트엔드개발자입니다.<br />
                            문제 해결에 즐거움을 느끼며 지속적인 성장을 추구합니다.
                        </p>
                    </div>
                    <div className="aboutInfor">
                        <div className="aboutInfor__left">
                            <h2>Frontend Developer</h2>
                            <div className="aboutInfor__img">
                                {/* <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="임시" /> */}
                            </div>
                            <p className='birth'>
                                Aug 29, 1991
                            </p>
                            <p className='desc'>
                                다양한 기술을 활용하여 창의적이고 사용자 친화적인 솔루션을 제공하는 프론트엔드개발자입니다. 문제 해결에 즐거움을 느끼며 지속적인 성장을 추구합니다.
                            </p>
                        </div>
                        <div className="aboutInfor__right">
                            <ul>
                                <li>
                                    <p>신화공영 관리부 대리</p> <span>2020-2023</span>
                                </li>
                                <li>
                                    <p>신화공영 온라인사업부 사원</p><span>2018-2020</span>
                                </li>
                                <li>
                                    <p>이랜드리테일 농산 사원</p><span>2015-2016</span>
                                </li>
                                <li>
                                    <p>안산대학교 디자인과 졸업</p><span>2010-2014</span>
                                </li>
                                <li>
                                    <p>안산공업고등학교 디자인과 졸업</p><span>2007-2010</span>
                                </li>
                            </ul>
                        </div>
                        <div className="aboutInfor__bottom">

                        </div>
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
                                            HTML5, CSS, Javascript,<br />
                                            React, Vite, Vue, PHP
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