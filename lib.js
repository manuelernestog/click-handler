export default class ClickHandler {
    constructor(delay = 350) {
      this.clicks = 0;
      this.clicksTimer = null;
      this.delay = delay;
    }
  
    handle(clickCallback, dblClickCallback) {
      this.clicks++;
      if (this.clicks == 1) {
        this.clicksTimer = setTimeout(() => {
          clickCallback();
          this.clicks = 0;
        }, this.delay);
      } else {
        clearTimeout(this.clicksTimer);
        dblClickCallback();
        this.clicks = 0;
      }
    }
  }
  