//capade vista organiada la presetacion de datos
export function renderizarSuperheroe(superheroe) {
  return {
    Nombre: superheroe.nombreSuperheroe,
    "Nombre Real": superheroe.nombreReal,
    Edad: superheroe.edad,
    "planeta de Origen": superheroe.planetaOrigen,
    Debilidad: superheroe.debilidad,
    Poderes: superheroe.poderes,
    Aliado: superheroe.aliados,
    Enemigos: superheroe.enemigos,
  };
}
export function renderizarListaSuperheroes(superheroes) {
  return superheroes.map((superheroe) => renderizarSuperheroe(superheroe));
}
