import gsap from "gsap";

export function subAbout() {
    const about = document.querySelector(".about");

    about.addEventListener("click", (event) => {
        event.preventDefault();

        const aboutAni = gsap.timeline();

        aboutAni.to([".close.sub", ".about.sub"], { opacity: 0, duration: 1.5, ease: "Power1.easeInOut" }, "<")
        aboutAni.to([".current.sub", ".scrollBar"], { y: 24, opacity: 0, duration: 1, ease: "power1.inOut" }, "<")
        aboutAni.to(".subTransitionOverlay", { display: "block", opacity: 1, duration: 1.5, ease: "Power1.easeInOut" })
        setTimeout(() => {
            aboutAni.eventCallback("onComplete", () => {
                window.location.href = "/about";
            });
        }, 500);
    })
}