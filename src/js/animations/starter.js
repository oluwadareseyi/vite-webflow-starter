import gsap from "gsap";

const showBody = () => {
  gsap.to("body", { duration: 0.5, autoAlpha: 1 });

  console.log("asdasdasdad");
};

export { showBody };
