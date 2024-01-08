import gsap from "gsap";

export function aboutClose() {
    document.querySelectorAll(".goMain").forEach((element) => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
            const closeAni = gsap.timeline();

            closeAni.to(".aboutClose", { opacity: 0, duration: 0.7, ease: "Power1.easeInOut" })
            document.querySelectorAll(".split.aboutLogo").forEach((text) => {
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
                        index * 0.05
                    );
                });

                closeAni.add(() => spanTimeline.play(), "-=0.5"); // subAni 타임라인에 추가
            });

            document.querySelectorAll(".split.aboutTitle").forEach((text) => {
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
                            y: 100,
                            opacity: 0,
                            ease: "Power1.easeInOut",
                        },
                        index * 0.05
                    );
                });

                closeAni.add(() => spanTimeline.play(), "-=0.5"); // subAni 타임라인에 추가
            });
            closeAni.to(["#about #header .logo", ".aboutCenter p"], { opacity: 0, duration: 0.7, ease: "power1.inOut" })
            closeAni.to(".aboutSlideWrap", { opacity: 0, duration: 0.7, ease: "Power1.easeInOut" }, "<")
            setTimeout(() => {
                closeAni.eventCallback("onComplete", () => {
                    window.location.href = "/home";
                });
            }, 500);
        });
    });
}