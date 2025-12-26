// ------------------APPLE BUTTON ANIMATION-----------------

class AppleButton {
  constructor(buttonElement) {
    this.button = buttonElement;
    this.buttonText = this.button.querySelector(".button_main_text-wrapper");
    this.buttonLogo = this.button.querySelector(".btn_apple_icon");
    this.timeline = null;

    if (this.isValid()) {
      console.log("button valid");
      this.init();
    }
  }

  isValid() {
    return this.buttonText && this.buttonLogo;
  }

  createTimeline() {
    this.timeline = gsap.timeline({
      paused: true,
    });

    this.timeline.to(this.buttonText, {
      yPercent: -40,
      duration: 0.5,
      ease: "power1.out",
    });

    // this.timeline.to(this.buttonLogo, { y: "-150%", duration: 0.3 }, 0);
  }

  attachEventListeners() {
    this.button.addEventListener("mouseenter", () => this.timeline.play());
    this.button.addEventListener("mouseleave", () => this.timeline.reverse());
  }

  init() {
    this.createTimeline();
    this.attachEventListeners();
  }
}

class AppleButtonManager {
  constructor(selector = ".button_main_element.is-apple") {
    this.selector = selector;
    this.buttons = [];
    this.init();
  }

  init() {
    const buttonElements = document.querySelectorAll(this.selector);

    if (!buttonElements.length) {
      console.warn(`Aucun bouton trouvé avec le sélecteur: ${this.selector}`);
      return;
    }

    buttonElements.forEach((buttonElement) => {
      const appleButton = new AppleButton(buttonElement);
      this.buttons.push(appleButton);
    });
  }

  destroy() {
    this.buttons.forEach((button) => {
      if (button.timeline) {
        button.timeline.kill();
      }
    });
    this.buttons = [];
  }
}

const appleButtonManager = new AppleButtonManager();
