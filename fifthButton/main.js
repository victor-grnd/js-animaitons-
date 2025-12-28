const fifthsButtons = document.querySelectorAll(".button_main_wrap.is-fifth");

fifthsButtons.forEach((button) => {
  const text = button.querySelector(".fifth_main_text");
  const arrow = button.querySelector(".u-svg");

  if (!text || !arrow) {
    return;
  }

  function initTextSplit(text) {
    const textSplited = SplitText.create(text, {
      type: "chars",
      mask: "chars",
    });

    return textSplited.chars;
  }

  const textSplited = initTextSplit(text);

  const timeline = gsap.timeline({ paused: true });

  timeline.fromTo(
    textSplited,
    {
      yPercent: 0,
    },
    {
      yPercent: -100,
      ease: "power1.out",
      duration: 0.3,
      stagger: {
        amount: 0.2,
      },
    },
    0
  );

  timeline.fromTo(
    textSplited,
    {
      yPercent: 100,
    },
    {
      yPercent: 0,
      ease: "power1.out",
      duration: 0.3,
      stagger: {
        amount: 0.2,
      },
    },
    0.13
  );

  timeline.fromTo(
    arrow,
    {
      yPercent: 0,
    },

    {
      xPercent: 100,
      yPercent: -100,
      ease: "power1.out",
      duration: 0.5,
    },
    0
  );

  timeline.fromTo(
    arrow,
    {
      xPercent: -100,
      yPercent: 100,
    },
    {
      xPercent: 0,
      yPercent: 0,
      ease: "power1.out",
      duration: 0.5,
    },
    0.21
  );

  button.addEventListener("mouseenter", () => {
    timeline.play();
  });

  button.addEventListener("mouseleave", () => {
    timeline.reverse();
  });
});
