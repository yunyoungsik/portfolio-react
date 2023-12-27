import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function homeSlider() {
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
                .to(desc, { y: -22.39 * (desc.length - 1), ease: "none" }, 0)
                .to(page, { y: -22.39 * (page.length - 1), ease: "none" }, 0)
                .to(title, { y: -43 * (title.length - 1), ease: "none" }, 0);
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
}