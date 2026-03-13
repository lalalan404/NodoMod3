//capa de servicio la logica del negocio actua con la capa de persitnecia pra obenter datos
import SuperheoresRepository from "../repository/superheroesRepository.mjs";

const repository = new SuperheoresRepository();

export function obenterSuperheroePorId(id) {
  const superheroes = repository.obtenerTodos();
  return superheroes.find((hero) => hero.id === id);
}
export function buscarSuperheroesPorAtributo(atributo, valor) {
  const superheroes = repository.obtenerTodos();
  return superheroes.filter((hero) =>
    String(hero[atributo]).toLowerCase().includes(valor.toLowerCase()),
  );
}
export function obtenerSuperheroesMayoresDe30() {
  const superheroes = repository.obtenerTodos();
  return superheroes.filter(
    (hero) =>
      hero.edad > 30 &&
      hero.planetaOrigen === "Tierra" &&
      hero.poder.length >= 2,
  );
}
