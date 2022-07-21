export default class ClickHandler {
  constructor(delay = 350) {
    this.delay = delay;
    this.handlerList = new Map();
  }

  handle(clickCallback, dblClickCallback, id = 'default') {
    var handler = this.getHandler(id);
    handler.clicks++;
    if (handler.clicks == 1) {
      handler.clicksTimer = setTimeout(() => {
        clickCallback();
        handler.clicks = 0;
      }, this.delay);
    } else {
      clearTimeout(handler.clicksTimer);
      dblClickCallback();
      handler.clicks = 0;
    }
  }

  getHandler(id) {
    if (this.handlerList.has(id)) return this.handlerList.get(id);

    this.handlerList.set(id,{clicks: 0,clicksTimer: null });
    return this.handlerList.get(id);
  }
}
