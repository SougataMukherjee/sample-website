gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

gsap.to(".arrow-down", { y: 10, repeat: -1, yoyo: true });
gsap.to(".arrow-up", { y: -10, repeat: -1, yoyo: true });

const wrapper = document.getElementById("scroll-wrapper");
const imagesWrapper = document.getElementById("images-wrapper");
const textWrappers = gsap.utils.toArray(".text-wrapper");

gsap.to([imagesWrapper, textWrappers], {
  x: (_, el) => -(el.scrollWidth - window.innerWidth),
  scrollTrigger: {
    trigger: wrapper,
    start: "top top",
    end: "400%",
    pin: true,
    scrub: true,
    invalidateOnRefresh: true,
  },
});

const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelector(".active-nav");
links.forEach((link) => {
  link.addEventListener("click", () => {
    gsap.to(links, { color: "#ffffff" });
    if (document.activeElement === link) {
      4;
      gsap.to(link, { color: "#385ae0" });
    }
    const state = Flip.getState(activeNav);
    link.appendChild(activeNav);
    Flip.from(state, {
      duration: 1.25,
      absolute: true,
      ease: "elastic.out(1,0.5)",
    });
  });
});

let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".slider",
    start: "30% 30%",
    end: "50% 50%",
    pin: true,
    scrub: true,
  },
});
tl1.to("#img-slider-1", {
  top: "-50%",
});
gsap.to("#img-slider-1", {
  rotateZ: -5,
  margin: 5,
  duration: 1,
  y: -20,
  repeat: -1,
  yoyo: true,
  ease: Power3.easeInOut,
});
tl1.to("#img-slider-2", {
  left: "85%",
});
