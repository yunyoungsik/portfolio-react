import gsap from "gsap";

export function navBar() {
    gsap.to("progress", {
        value: 100,
        ease: "Power1.easeInOut",
        scrollTrigger: { scrub: 0.3 }
    });
}