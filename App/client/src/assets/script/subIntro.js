import gsap from "gsap";
import SplitType from 'split-type';

export function subIntro() {
    const subAni = gsap.timeline();


    subAni.fromTo(".transitionOverlay", { opacity: 0.8, zIndex: 1 }, { display: "inline-block", opacity: 0.5, duration: 0.5, ease: "Power1.easeInOut" })
    subAni.to(".subBgSliderWrap section.s1", { backdropFilter: 'blur(75px)', duration: 0.7, ease: "Power1.easeInOut" }, "<")
    subAni.to([".close.sub", ".about.sub"], { opacity: 1, duration: 0.7, ease: "Power1.easeInOut" })
    subAni.fromTo([".current.sub", ".scrollBar"], { y: 24 }, { y: 0, opacity: 1, duration: 0.7, ease: "power1.inOut" }, "<")
    subAni.fromTo(".sub__center .subTitle", { y: 72 }, { y: 0, opacity: 1, duration: 0.7, ease: "power1.inOut" }, "<")
    subAni.fromTo(".subBgSlider .split", { opacity: 0 }, { opacity: 1, duration: 0.7, ease: "power1.inOut" }, "<")

    const targets = gsap.utils.toArray(".split");
    targets.forEach((target) => {
        let splitClient = new SplitType(target, { type: "lines, words, chars" });
        // let lines = splitClient.lines;
        // let words = splitClient.words;
        let chars = splitClient.chars;
        gsap.utils.toArray(chars).forEach((char, index) => {
            subAni.fromTo(char,
                {

                    y: 15,
                    opacity: 0,
                    display: "inline-block"
                },
                {
                    y: 0,
                    opacity: 1,
                    ease: "Power1.easeInOut",
                },
                index * 0.02
            );
        })
    })
}