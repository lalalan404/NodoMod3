import fs from "fs";

//leer un archivo de manera asincrona
fs.readFile("./example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("contenido del archivo:", data);
});

//crea y escribe un nuevo archivo
fs.writeFile("./newfile.txt", "contenido nuevo", (err) => {
  if (err) throw err;
  console.log("archivo creado y escrito");
});
//renombrar un archivo
fs.rename("./newfile.txt", "./renamedfile.txt", (err) => {
  if (err) throw err;
  console.log("archivo renombrado");
});
