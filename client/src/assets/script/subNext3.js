import gsap from "gsap";
import SplitType from 'split-type';

export function subNext3() {
    const next = document.querySelectorAll(".nextPage");

    next.forEach(el => {
        el.addEventListener("click", (event) => {
            event.preventDefault();

            const subBgSlider = document.querySelector(".subBgSlider");
            subBgSlider.classList.add("next3");

            const nextAni = gsap.timeline();

            nextAni.to(".subBgSliderWrap", { xPercent: 0, duration: 1, ease: "Power1.easeInOut" });

            const targets = gsap.utils.toArray(".split");
            targets.forEach((target) => {
                let splitClient = new SplitType(target, { type: "lines, words, chars" });
                // let lines = splitClient.lines;
                // let words = splitClient.words;
                let chars = splitClient.chars;
                gsap.utils.toArray(chars).forEach((char, index) => {
                    nextAni.fromTo(char,
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
                        index * 0.01
                    );
                })
            })

            nextAni.fromTo([".current.sub", ".scrollBar", ".comment"], { y: 0 }, { y: 24, opacity: 0, duration: 0.7, ease: "power1.inOut" })
            nextAni.to([".close.sub"], { opacity: 0, duration: 0.7, ease: "Power1.easeInOut" }, "<");
            nextAni.to("transitionOverlay", { opacity: 0.8, duration: 1, ease: "Power1.easeInOut" })
            nextAni.to(".subBgSliderWrap section.s1", { backdropFilter: 'blur(0px)', duration: 1, ease: "Power1.easeInOut" }, "<")


            setTimeout(() => {
                nextAni.eventCallback("onComplete", () => {
                    window.location.href = "/movie";
                });
            }, 3000);
        });
    });
}