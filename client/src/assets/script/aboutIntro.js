import gsap from "gsap";

export function aboutIntro() {
    const aboutIntro = gsap.timeline();

    aboutIntro.to("#about #header .logo", { opacity: 1, duration: 0.5, ease: "power1.inOut", delay: 0.5 })
    aboutIntro.to(["#about #header .logo span", "#about #header .aboutClose"], { opacity: 1, duration: 0.5, ease: "power1.inOut" })
    aboutIntro.to(".aboutCenter h2 ", { opacity: 1 }, "<")

    document.querySelectorAll(".split.aboutLogo").forEach((text) => {
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
                index * 0.03
            );
        });

        aboutIntro.add(() => spanTimeline.play(), "-=0.5"); // subAni 타임라인에 추가
    });

    document.querySelectorAll(".split.aboutTitle").forEach((text) => {
        const spanTimeline = gsap.timeline({ paused: true });

        gsap.utils.toArray(text.querySelectorAll("span")).forEach((span, index) => {
            spanTimeline.fromTo(
                span,
                {
                    y: 100,
                    opacity: 0,
                    display: "inline-block"
                },
                {
                    y: 0,
                    opacity: 1,
                    ease: "Power1.easeInOut",
                },
                index * 0.05
            );
        });

        aboutIntro.add(() => spanTimeline.play(), "-=0.5"); // subAni 타임라인에 추가
    });
    aboutIntro.to(".aboutCenter p", { opacity: 1, duration: 0.5, ease: "power1.inOut" })
}