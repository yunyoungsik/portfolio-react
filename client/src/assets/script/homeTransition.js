import gsap from "gsap";

export function homeTransition() {
    // transition
    const subLinks = document.querySelectorAll(".subLink");

    subLinks.forEach((subLink) => {
        subLink.addEventListener("click", function (event) {
            event.preventDefault();

            const pageTransition = gsap.timeline({
                onComplete: () => {
                    if (subLink.classList.contains("td")) {
                        window.location.href = "./td";
                    } else if (subLink.classList.contains("yt")) {
                        window.location.href = "./youtube";
                    } else if (subLink.classList.contains("mv")) {
                        window.location.href = "./movie";
                    } else if (subLink.classList.contains("ki")) {
                        window.location.href = "/kickoff";
                    } else if (subLink.classList.contains("bl")) {
                        window.location.href = "/blog";
                    }
                }
            });

            setTimeout(() => {
                pageTransition.to(
                    ".center__img",
                    {
                        opacity: 0,
                        duration: 0.5,
                        ease: "Power1.easeInOut",
                        delay: 0,
                    },
                    ">"
                );

                document.querySelectorAll(".split").forEach((text) => {
                    const spanTimeline = gsap.timeline({ paused: true });

                    gsap.utils
                        .toArray(text.querySelectorAll("span"))
                        .forEach((span, index) => {
                            spanTimeline.fromTo(
                                span,
                                {
                                    y: 0,
                                    opacity: 1,
                                    display: "inline-block",
                                },
                                {
                                    y: -72,
                                    opacity: 0,
                                    stagger: 0.051,
                                    ease: "Power1.easeInOut",
                                },
                                index * 0.03
                            );
                        });

                    pageTransition.add(() => spanTimeline.play(), "-=0.5");
                });

                pageTransition.to(
                    ".descSlider",
                    {
                        opacity: 0,
                        duration: 0.7,
                        ease: "expo.out",
                        delay: 0,
                    },
                    "<"
                );
                pageTransition.to(
                    ".logo > a",
                    {
                        opacity: 0,
                        yPercent: -110,
                        duration: 0.7,
                        ease: "expo.out",
                        delay: 0,
                    },
                    "<"
                );
                pageTransition.to(
                    [".page > span", ".scroll__text > p"],
                    {
                        opacity: 0,
                        yPercent: 110,
                        duration: 0.7,
                        ease: "expo.out",
                        delay: 0,
                    },
                    "<"
                );
                pageTransition.to(
                    "#mainSlider",
                    {
                        xPercent: -100,
                        duration: 1.5,
                        backgroundColor: "black",
                        ease: "power4.inOut",
                        display: "none",
                        delay: 0,
                    },
                    "<"
                );
                pageTransition.to(
                    ".bgSliderWrap > a > .slider",
                    {
                        scale: 1,
                        duration: 0.7,
                        ease: "Power1.easeInOut",
                        delay: 0,
                    },
                    "<"
                );
                pageTransition.to(".transitionOverlay", { display: "inline-block", duration: 1, ease: "Power1.easeInOut", opacity: 0.8 }, "<")
            });
        }, 1000);
    });
}