import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from 'split-type';

export function subClose() {
    document.querySelectorAll(".goMain").forEach((element) => {
        element.addEventListener("click", function (event) {
            event.preventDefault();

            const closeAni = gsap.timeline();

            document.querySelector(".subBgSlider").classList.add("s1")

            closeAni.to(".subBgSliderWrap", { xPercent: 0, duration: 1, ease: "Power1.easeInOut" });
            closeAni.to([".close.sub"], { opacity: 0, duration: 0.5, ease: "Power1.easeInOut" });
            closeAni.fromTo([".current.sub", ".scrollBar"], { y: 0 }, { y: 24, opacity: 0, duration: 0.5, ease: "power1.inOut" }, "<")

            const targets = gsap.utils.toArray(".split");
            targets.forEach((target) => {
                let splitClient = new SplitType(target, { type: "lines, words, chars" });
                // let lines = splitClient.lines;
                // let words = splitClient.words;
                let chars = splitClient.chars;
                gsap.utils.toArray(chars).forEach((char, index) => {
                    closeAni.fromTo(char,
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

            closeAni.to(".subBgSliderWrap section", { backdropFilter: 'blur(0px)', duration: 0.5, ease: "Power1.easeInOut" })
            closeAni.to("#subMainSlider",
                {
                    translateX: 0,
                    duration: 1,
                    backgroundColor: "white",
                    ease: "Power1.easeInOut",
                    display: "block",
                },
            );
            ScrollTrigger.matchMedia({
                "(min-width: 801px)": function () {
                    closeAni.fromTo(".subBgSlider", { backgroundSize: "100%" }, { backgroundSize: "150%", duration: 0.5, ease: "Power1.easeInOut" }, "<")
                },
                "(max-width: 800px)": function () {

                }
            })
            closeAni.to(".transitionOverlay", { opacity: 0, duration: 1, ease: "Power1.easeInOut" }, "<")
            setTimeout(() => {
                closeAni.eventCallback("onComplete", () => {
                    window.location.href = "/home";
                });
            }, 500);
        });
    });
}