class Palette {
  constructor(canvas) {
    this.canvas = canvas;
    this.parent = document.getElementById('jsColors');

    this.handleColorClick = this.handleColorClick.bind(this);

    this.setEvent();
  }

  handleColorClick(event) {
    if(event.target.tagName !== 'BUTTON') {
      return;
    }
    this.canvas.setColor(event.target.style.backgroundColor);

  }

  setEvent() {
    if(this.parent) {
      this.parent.addEventListener("click", this.handleColorClick);

    }
  }
}

new Palette(new Canvas);