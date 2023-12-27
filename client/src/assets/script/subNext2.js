import gsap from "gsap";

export function subNext2() {
    const next = document.querySelectorAll(".nextPage");

    next.forEach(el => {
        el.addEventListener("click", (event) => {
            event.preventDefault();

            const subBgSlider = document.querySelector(".subBgSlider");
            subBgSlider.classList.add("next3");

            const nextAni = gsap.timeline();

            nextAni.to(".subBgSliderWrap", { xPercent: 0, duration: 1, ease: "Power1.easeInOut" });

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
                nextAni.add(() => spanTimeline.play(), "-=0.5");
            });
            nextAni.to([".close.sub"], { opacity: 0, duration: 1.5, ease: "Power1.easeInOut" }, "<");
            nextAni.fromTo([".current.sub", ".scrollBar", ".comment"], { y: 0 }, { y: 24, opacity: 0, duration: 1, ease: "power1.inOut" }, "<")
            nextAni.to(".subBgSliderWrap section.s1", { backdropFilter: 'blur(0px)', duration: 1.5, ease: "Power1.easeInOut" }, "<")

            setTimeout(() => {
                nextAni.eventCallback("onComplete", () => {
                    window.location.href = "/movie";
                });
            }, 3000);
        });
    });
}