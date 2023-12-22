import gsap from "gsap";

export function aboutHover() {
    const email = document.querySelector(".emailLink");

    // hover
    email.addEventListener("mouseover", function () {
        const splitTexts = document.querySelectorAll(".split.text");
        const windowWidth = window.innerWidth;

        splitTexts.forEach((text) => {
            const spanTimeline = gsap.timeline({ paused: true });

            gsap.utils.toArray(text.querySelectorAll("span")).forEach((span, index) => {
                let yPos = 0;

                if (windowWidth <= 800) {
                    yPos = -50;
                } else {
                    yPos = -75;
                }

                spanTimeline.fromTo(
                    span,
                    {
                        y: 0,
                        opacity: 1,
                        display: "inline-block"
                    },
                    {
                        y: yPos,
                        opacity: 1,
                        ease: "Power1.easeInOut"
                    },
                    index * 0.02
                );
            });
            spanTimeline.play();
        });

        gsap.fromTo(".svg > .svg1", { opacity: 1, scale: 1 }, { opacity: 1, scale: 0, transformOrigin: "100% 0%", ease: "Power1.easeInOut" });
        gsap.fromTo(".svg > .svg2", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, transformOrigin: "0% 100%", ease: "Power1.easeInOut" });
    });

    // out
    email.addEventListener("mouseout", function () {
        document.querySelectorAll(".split.text").forEach((text) => {
            const spanTimeline = gsap.timeline({ paused: true });

            gsap.utils.toArray(text.querySelectorAll("span")).forEach((span, index) => {
                spanTimeline.fromTo(
                    span,
                    {
                        y: -75,
                        opacity: 1,
                        display: "inline-block"
                    },
                    {
                        y: 0,
                        opacity: 1,
                        ease: "Power1.easeInOut",
                    },
                    index * 0.01
                );
                spanTimeline.play();
            });
        });
        gsap.fromTo(".svg > .svg2", { opacity: 1, scale: 1 }, { opacity: 0, scale: 0, transformOrigin: "0% 100%", ease: "Power1.easeInOut" })
        gsap.fromTo(".svg > .svg1", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, transformOrigin: "100% 0%", ease: "Power1.easeInOut" })
    })
}