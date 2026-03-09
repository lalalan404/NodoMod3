//path es un manipulador de cadenas de texto especializado en rutas de archivos.
//Su única función es procesar y formatear esas cadenas para que tengan sentido lógico.

import path from "path";

//definimos una ruta del archivo de ejemplo

const filePath = "./data/example.pdf";

//obtener el directorio base
const dirName = path.dirname(filePath);
console.log("directorio base:", dirName);

//obtener el nombre del archivo sin extension
const baseName = path.basename(filePath, ".txt");
console.log("nombre del archivo:", baseName);

//obtener la extension del archivo
const extName = path.extname(filePath);
console.log("extension del archivo:", extName);

//crear una ruta unida
const newPath = path.join("/user", "docs", "newfile.txt");
console.log("nueva ruta:", newPath);
