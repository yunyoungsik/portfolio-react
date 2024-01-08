import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function subSlider() {
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

    return () => {
        // ScrollTrigger 해제
        ScrollTrigger.getAll().forEach(trigger => {
            trigger.kill();
        });
        // GSAP 애니메이션 중지 또는 제거
        gsap.kill();
    };
}