//la vista es responsable de formatear a los datos en un foramto adecuad, en este caso JSON
export function renderizarSuperheroe(superheroe) {
  return JSON.stringify(superheroe, null, 2);
}

export function renderizarListaSuperheroe(superheroes) {
  return JSON.stringify(superheroes, null, 2);
}
