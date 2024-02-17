import gsap from "gsap";
import SplitType from "split-type";

export function animateHero() {
  // Scale the hero image
  gsap.from('[data-item="hero-image"]', {
    scale: 1.6,
    duration: 2,
    ease: "power3.inOut",
  });

  // Split text and animate
  const heroText = document.querySelectorAll('[data-item="hero-text"]');
  const split = new SplitType(heroText, { types: "chars" });
  const chars = split.chars;
  const middleIndex = Math.floor(chars.length / 2);

  chars.forEach((char, index) => {
    const stagger = Math.abs(index - middleIndex) * 0.1;
    gsap.from(char, {
      y: "100%",
      duration: 0.8,
      delay: stagger,
      ease: "power2.out",
    });
  });
}
