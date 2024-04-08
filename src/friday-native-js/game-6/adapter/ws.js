export const socket = new WebSocket("ws://localhost:3030");

socket.onopen = function (e) {
  console.log("Соединение установленно");
  socket.send("hi, server");
};

socket.onmessage = function (e) {
  console.log("message:" + e.data);
};
