class Canvas {
  static CANVAS_WIDTH = 400;
  static CANVAS_HEIGHT = 500;
  static INITIAL_COLOR = "#191914";
  static LINE_WIDTH = 1;

  constructor() {
    this.$canvas = document.getElementById("jscanvas");
    
    this.context = this.$canvas.getContext("2d");
    this.context.fillStyle = "white";
    this.context.fillRect(0, 0, Canvas.CANVAS_WIDTH, Canvas.CANVAS_HEIGHT);

    this.isPainting = false;
    this.isFilling = false;

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.init();

  }

  init() {
    this.setSize({ width : Canvas.CANVAS_WIDTH, height : Canvas.CANVAS_HEIGHT });
    this.setColor(Canvas.INITIAL_COLOR);
    this.setLineWidth(Canvas.LINE_WIDTH);
    this.setEvent();
  }

  setSize(size) {
    const { width, height } = size;
    this.$canvas.width = width;
    this.$canvas.height = height;
  }

  setColor(color) {
    this.context.fillStyle = color;
    this.context.strokeStyle = color;
  }

  setLineWidth(lineWidth) {
    this.context.lineWidth = lineWidth;
  }

  setEvent() {
    if(this.$canvas) {
      this.$canvas.addEventListener("mousemove", this.handleMouseMove);
      this.$canvas.addEventListener("mouseleave", this.handleMouseLeave);
      this.$canvas.addEventListener("mouseup", this.handleMouseUp);
      this.$canvas.addEventListener("mousedown", this.handleMouseDown);
      this.$canvas.addEventListener("click", this.handleClick);
      this.$canvas.addEventListener("contextmenu", this.preventDefault);
    }
  }

  handleMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    this.draw(x, y);
  }

  handleMouseLeave() {
    this.stopPainting();
  }

  handleMouseUp() {
    this.stopPainting();
  }

  handleMouseDown() {
    this.startPainting();
  }

  draw(x, y) {
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
  
  setMode() {
    this.isFilling = !this.isFilling;
  }

  handleClick() {
    if(this.isFilling) {
      this.fill();
    }
  }

  fill() {
    this.context.fillRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  preventDefault(event) {
    event.preventDefault();
  }

}

export default Canvas;