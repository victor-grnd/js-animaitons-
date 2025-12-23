//-----------------------SHADOW CLASS-------------------

class shadowButton {
  constructor(button) {
    this.button = button;
    this.shadow = this.button.querySelector(".button_main_shadow");
    if (!this.shadow) return;
    this.init();
  }

  init() {
    this.setPosition = (x, y) => {
      this.shadow.style.transform = `translate(${x}px, ${y}px)`;
    };
    this.initEvents();
  }

  getXY(e) {
    const rect = this.button.getBoundingClientRect();
    // On centre la shadow sur le curseur (optionnel, selon ton CSS)
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  handleMove(e) {
    const { x, y } = this.getXY(e);
    this.setPosition(x, y);
  }

  initEvents() {
    this.button.addEventListener("mousemove", (e) => {
      this.handleMove(e);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button_main_wrap.is-shadow");

  buttons.forEach((button) => {
    new shadowButton(button);
  });
});
