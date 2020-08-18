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
      // to do : save
    }
    
  }

  setEvent() {
    if(this.parent) {
      this.parent.addEventListener("click", this.handleControlClick);
    }

  }
}

export default Toolbar;