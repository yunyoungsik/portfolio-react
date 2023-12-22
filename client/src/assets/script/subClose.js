import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function subClose() {
    document.querySelectorAll(".goMain").forEach((element) => {
        element.addEventListener("click", function (event) {
            event.preventDefault();

            const closeAni = gsap.timeline();

            closeAni.to(".subBgSliderWrap", { xPercent: 0, duration: 1, ease: "Power1.easeInOut" });
            closeAni.to([".close.sub"], { opacity: 0, duration: 1.5, ease: "Power1.easeInOut" });

            document.querySelectorAll(".split").forEach((text) => {
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
                        index * 0.01
                    );
                });

                closeAni.add(() => spanTimeline.play(), "-=0.5");
            });
            closeAni.fromTo([".current.sub", ".scrollBar"], { y: 0 }, { y: 24, opacity: 0, duration: 1, ease: "power1.inOut" })
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
                    closeAni.fromTo(".subBgSlider", { backgroundSize: "100%" }, { backgroundSize: "150%", duration: 1, ease: "Power1.easeInOut" }, "<")
                },
                "(max-width: 800px)": function () {

                }
            })
            closeAni.to(".subBgSliderWrap section", { backdropFilter: 'blur(0px)', duration: 2, ease: "Power1.easeInOut" })
            closeAni.to(".transitionOverlay", { opacity: 0, duration: 2, ease: "Power1.easeInOut" }, "<")
            setTimeout(() => {
                closeAni.eventCallback("onComplete", () => {
                    window.location.href = "/";
                });
            }, 500);
        });
    });
}