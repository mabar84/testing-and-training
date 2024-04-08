import { EventEmiter } from "../utils/observer/observable.js";

export class WSAdapter extends EventEmiter {
  #socket;
  constructor(socket) {
    super();
    this.#socket = socket;

    // this.#socket.onmessage = function (eventAsString) {
    //   const event = JSON.parse(eventAsString);
    //   this.emit("new-message", event);
    // };
  }
  send(data) {
    this.#socket.send(JSON.stringify(data));
  }
}
