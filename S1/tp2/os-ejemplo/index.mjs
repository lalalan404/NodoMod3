import os from "os";

//obtner aruqitectura del sistema
console.log("arquitectura:", os.arch());

//obtener tipo del sistema operativo
console.log("plataforma:", os.platform());

//obtner la cantidad total de memoria
console.log("memoria total:", os.totalmem());

//obtener la memoria libre
console.log("memoria libre:", os.freemem());

//obtener ifnormacion de la cpu
console.log("informacion de la cpu:", os.cpus());
