class Toolbar {
  constructor(canvas) {
    this.canvas = canvas;
    this.parent = document.querySelector('.controls_btns');
    
    this.handleControlClick = this.handleControlClick.bind(this);

    this.setEvent();
  }
  
  handleControlClick(event) {
    if(event.target.id === 'jsMode') {
      this.canvas.setMode();
      if(this.canvas.isFilling) {
        event.target.innerText = "Paint"
      } else {
        event.target.innerText = "Fill"
      }
    } else if(event.target.id === 'jsSave') {
      const dataURL = this.canvas.getDataURL();
      const link = document.createElement("a");

      link.href = dataURL;
      link.download = "catchmind_img";
      link.click();
    }
    
  }

  setEvent() {
    if(this.parent) {
      this.parent.addEventListener("click", this.handleControlClick);
    }

  }
}

export default Toolbar;