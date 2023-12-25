import gsap from "gsap";

export function subIntro() {
    const subAni = gsap.timeline();

    subAni.fromTo(".transitionOverlay", { opacity: 0.8, zIndex: 1 }, { display: "inline-block", opacity: 0.5, duration: 1.5, ease: "Power1.easeInOut" }, "<")
    subAni.to(".subBgSliderWrap section.s1", { backdropFilter: 'blur(75px)', duration: 1.5, ease: "Power1.easeInOut" }, "<")
    subAni.to([".close.sub", ".about.sub"], { opacity: 1, duration: 1.5, ease: "Power1.easeInOut" }, "<")
    subAni.fromTo(".sub__center .subTitle", { y: 72 }, { y: 0, opacity: 1, duration: 1, ease: "power1.inOut" }, "<")
    subAni.fromTo(".subBgSlider .split", { opacity: 0 }, { opacity: 1, duration: 1, ease: "power1.inOut" }, "<")

    document.querySelectorAll(".split").forEach((text) => {
        const spanTimeline = gsap.timeline({ paused: true });

        gsap.utils.toArray(text.querySelectorAll("span")).forEach((span, index) => {
            spanTimeline.fromTo(
                span,
                {
                    y: 30,
                    opacity: 0,
                    display: "inline-block"
                },
                {
                    y: 0,
                    opacity: 1,
                    ease: "Power1.easeInOut",
                },
                index * 0.01
            );
        });

        subAni.add(() => spanTimeline.play(), "-=0.5"); // subAni 타임라인에 추가
    });
    subAni.fromTo([".current.sub", ".scrollBar", ".comment"], { y: 24 }, { y: 0, opacity: 1, duration: 1, ease: "power1.inOut" })
}