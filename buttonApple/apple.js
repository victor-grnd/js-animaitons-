//---------------APPLE BUTTON ANIMATION---------------------

const appleButtons = document.querySelectorAll(".button_main_element.is-apple");

appleButtons.forEach((button) => {
  const appleText = button.querySelector(".apple_main_text");
  const appleIcon = button.querySelector(".btn_apple_icon");

  if (!appleText || !appleIcon) return;

  const appleTl = gsap.timeline({ paused: true });

  appleTl
    .to(appleText, {
      yPercent: -200,
      duration: 0.6,
      ease: "power2.inOut",
    })
    .to(
      appleIcon,
      {
        yPercent: -200,
        duration: 0.6,
        ease: "power2.inOut",
      },
      ">-0.25"
    );

  button.addEventListener("mouseenter", () => appleTl.play());
  button.addEventListener("mouseleave", () => appleTl.reverse());
});
