import fs from "fs";

//clase para representar un superheroe

class Superheroe {
  constructor(
    id,
    nombreSuperheroe,
    nombreReal,
    nombreSociedad,
    edad,
    planetaOrigen,
    debilidad,
    poder,
    habilidadEspecial,
    aliado,
    enemigo,
  ) {
    this.id = id;
    this.nombreSuperheroe = nombreSuperheroe;
    this.nombreReal = nombreReal;
    this.nombreSociedad = nombreSociedad;
    this.edad = edad;
    this.planetaOrigen = planetaOrigen;
    this.debilidad = debilidad;
    this.poder = poder;
    this.habilidadEspecial = habilidadEspecial;
    this.aliado = aliado;
    this.enemigo = enemigo;
  }
}
//funcion para leer y ordenar los superheores
export function leerSuperheroes(ruta) {
  const datos = fs.readFileSync(ruta, "utf8");
  const superheroesArray = JSON.parse(datos);

  //convertir a instancias de Superheroe
  const superheroes = superheroesArray.map(
    (hero) =>
      new Superheroe(
        hero.id,
        hero.nombreSuperheroe,
        hero.nombreReal,
        hero.nombreSociedad,
        hero.edad,
        hero.planetaOrigen,
        hero.debilidad,
        hero.poder,
        hero.habilidadEspecial,
        hero.aliado,
        hero.enemigo,
      ),
  );
  //ordenar por nombre de superheores
  superheroes.sort((a, b) =>
    a.nombreSuperheroe.localeCompare(b.nombreSuperheroe),
  );
  return superheroes;
}

//nueva funcion para agregar superherores
export function agregarSuperheroes(rutaOriginal, rutaNuevos) {
  const datosOriginales = fs.readFileSync(rutaOriginal, "utf8");
  const datosNuevos = fs.readFileSync(rutaNuevos, "utf8");

  const superheoresOriginales = JSON.parse(datosOriginales);
  const nuevosSuperheroes = JSON.parse(datosNuevos);

  //converitr los nuevos superheroe a isntancias de superheroes
  const instanciasNuevos = nuevosSuperheroes.map(
    (hero) =>
      new Superheroe(
        hero.id,
        hero.nombreSuperheroe,
        hero.nombreReal,
        hero.nombreSociedad,
        hero.edad,
        hero.planetaOrigen,
        hero.debilidad,
        hero.poder,
        hero.habilidadEspecial,
        hero.aliado,
        hero.enemigo,
      ),
  );
  //combinar listas
  const listaActualizada = [...superheoresOriginales, ...instanciasNuevos];

  //guardar la lista actualizada
  fs.writeFileSync(
    rutaOriginal,
    JSON.stringify(listaActualizada, null, 2),
    "utf8",
  );
  console.log("lista de superheroes actualizada con exito.");
}
