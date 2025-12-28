//----------------------FOURTH BUTTON -> 2 LAYERS WITH BG BUTTON-------------------

const buttons = document.querySelectorAll(".button_main_wrap.is-fourth");

buttons.forEach((button) => {
  const firstLayer = button.querySelector(
    ".button_main_element.is-first-layer"
  );
  const secondLayer = button.querySelector(
    ".button_main_element.is-second-layer"
  );
  const roundedBg = button.querySelector(".button_main_bg-hover");

  const layersHoverTl = gsap.timeline({ paused: true });

  layersHoverTl.to(
    firstLayer,
    {
      yPercent: -100,
      duration: 0.5,
      ease: "power2.out",
    },
    0
  );
  layersHoverTl.to(
    secondLayer,
    {
      yPercent: -150,
      duration: 0.5,
      ease: "power2.out",
    },
    ">-0.25"
  );

  button.addEventListener("mouseenter", () => {
    layersHoverTl.play();
  });
  button.addEventListener("mouseleave", () => {
    layersHoverTl.reverse();
  });
});
