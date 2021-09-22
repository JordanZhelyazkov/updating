import EventEmitter from "eventemitter3";
import anime, { easings } from "animejs";
export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.init();
    this.emit(Application.events.READY);
  }
  init() {
    const article = document.querySelector(".article");
    article.addEventListener('click',()=>{
      anime({
        targets:  ['article'],
        translateX: 270,
        direction: "alternate",
        loop: true,
        duration: 2000,
        easing: 'spring(5, 90, 10, 10)',
      })
    });
  }
}
