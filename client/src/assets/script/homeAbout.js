import gsap from "gsap";

export function homeAbout() {
    const about = document.querySelector(".about");

    about.addEventListener("click", (event) => {
        event.preventDefault();

        const aboutAni = gsap.timeline();

        aboutAni.to(".transitionOverlay.main", { display: "block", zIndex: 9999, opacity: 1, duration: 2, ease: "Power1.easeInOut" })
        setTimeout(() => {
            aboutAni.eventCallback("onComplete", () => {
                window.location.href = "/about";
            });
        }, 500);
    })
}