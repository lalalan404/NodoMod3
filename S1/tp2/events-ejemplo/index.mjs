import { EventEmitter } from "events";

//crear una isntacia de eventEmitter
const emisor = new EventEmitter();

//definir un evento personalziado
emisor.on("saludo", (nombre) => {
  console.log(`¡hola, ${nombre}!`);
});
//emitir el evento saludo
emisor.emit("saludo", "mundo");
