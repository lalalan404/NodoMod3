import { leerSuperheroes, agregarSuperheroes } from "./utils.mjs";
//leer y msotrar lista de superheroess ordenada
//const superheroes = leerSuperheores("./superheroes.txt");
//console.log("superheores ordenados:");
//console.log(superheroes);

const archivoOriginal = "./superheroes.txt";
const archivoNuevos = "./agregarSuperheroes.txt";

//agregar nuevos superheroes
agregarSuperheroes(archivoOriginal, archivoNuevos);

//leer y mostrar la lista actualizada de superheroes ordenada
const superheroes = leerSuperheroes(archivoOriginal);
console.log("superheores ordenados");
console.log(superheroes);
