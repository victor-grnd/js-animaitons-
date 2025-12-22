const button = document.querySelector(".button_main_wrap.is-bubble");

function animateBubble(button, e) {
  const bubble = button.querySelector(".button_main_circle");
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  bubble.style.left = `${x}px`;
  bubble.style.top = `${y}px`;

  bubble.classList.add("animate");
}

function unanimateBubble(button) {
  const bubble = button.querySelector(".button_main_circle");
  bubble.classList.remove("animate");
}

button.addEventListener("mouseenter", (e) => {
  animateBubble(e.currentTarget, e);
});

button.addEventListener("mouseleave", (e) => {
  unanimateBubble(e.currentTarget);
});
