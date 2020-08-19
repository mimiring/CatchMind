class Brush {
  constructor(canvas) {
    this.canvas = canvas;
    this.range = document.getElementById('jsRange');

    this.handleRangeClick = this.handleRangeClick.bind(this);

    this.setEvent();
  }

  handleRangeClick(event) {
    const size = event.target.value;
    this.canvas.setLineWidth(size);
  }
  setEvent() {
    if(this.range) {
      this.range.addEventListener("click", this.handleRangeClick);
    }
  }
  // to do : brush type

}

export default Brush;