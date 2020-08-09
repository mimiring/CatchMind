class Canvas {
  static CANVAS_WIDTH = 400;
  static CANVAS_HEIGHT = 500;
  static INITIAL_COLOR = "#191914";

  constructor() {
    this.$canvas = document.getElementById("jsCanvas");

    this.context = this.$canvas.getContext("2d");
    this.context.fillStyle = "white";
    this.context.fillRect(0, 0, Canvas.CANVAS_WIDTH, Canvas.CANVAS_HEIGHT);
    this.context.fillstrokeStyle = Canvas.INITIAL_COLOR;
    this.context.fillStyle = Canvas.INITIAL_COLOR;

    this.setEvent();
    
    this.isPainting = false;
    this.isFilling = false;
  }

  setSize(size) {
    const { width, height } = size;
    this.$canvas.width = width;
    this.$canvas.height = height;
  }

  setColor(color) {
    // to do : change color method
  }

  setEvent() {
    if(this.$canvas) {
      this.$canvas.addEventListener("mousemove", this.handleMouseMove);
      this.$canvas.addEventListener("mouseleave", this.stopPainting);
      this.$canvas.addEventListener("mouseup", this.stopPainting);
      this.$canvas.addEventListener("mousedown", this.startPainting);
      this.$canvas.addEventListener("click", this.handleClick);
      this.$canvas.addEventListener("contextmenu", this.preventDefault);
    }
  }

  handleMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if(!this.isPainting) {
      this.context.beginPath();
      this.context.moveTo(x, y);
    } else {
      this.context.lineTo(x, y);
      this.context.stroke();
    }
  }

  stopPainting() {
    this.isPainting = false;
  }

  startPainting() {
    this.isPainting = true;
  }
  
  handleClick() {
    if(this.isFilling) {
      this.context.fillRect(0, 0, this.$canvas.width, this.$canvas.height);
    }
  }

  preventDefault(event) {
    event.preventDefault();
  }

}