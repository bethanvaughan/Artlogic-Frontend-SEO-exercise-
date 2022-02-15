class HideShowFAQ {
  constructor(buttonfaq) {
    this.buttonfaq = buttonfaq;
    this.controlAnswer = false;

    let id = this.buttonfaq.getAttribute("aria-controls");
    if (id) {
      this.controlAnswer = document.getElementById(id);
    }

    this.buttonfaq.setAttribute("aria-expanded", "false");
    this.hideAnswer();
    this.buttonfaq.addEventListener("click", this.onClick.bind(this));
  }

  showAnswer() {
    if (this.controlAnswer) {
      this.controlAnswer.style.display = "block";
    }
  }

  hideAnswer() {
    if (this.controlAnswer) {
      this.controlAnswer.style.display = "none";
    }
  }

  toggleExpand() {
    if (this.buttonfaq.getAttribute("aria-expanded") === "true") {
      this.buttonfaq.setAttribute("aria-expanded", "false");
      this.hideAnswer();
    } else {
      this.buttonfaq.setAttribute("aria-expanded", "true");
      this.showAnswer();
    }
  }

  onClick() {
    this.toggleExpand();
  }
}

window.addEventListener(
  "load",
  () => {
    let buttons = document.querySelectorAll(
      "button[aria-expanded][aria-controls]"
    );

    for (let i = 0; i < buttons.length; i++) {
      new HideShowFAQ(buttons[i]);
    }
  },
  false
);
