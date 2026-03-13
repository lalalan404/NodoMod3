//el controlador manejara las solicitudes HTTP y utiliza la capa de servicio para obtener datos necesarios

import {
  obenterSuperheroePorId,
  buscarSuperheroesPorAtributo,
  obtenerSuperheroesMayoresDe30,
} from "../services/superheroesService.mjs";

import {
  renderizarSuperheroe,
  renderizarListaSuperheroe,
} from "../views/responseView.mjs";

export function obenterSuperheroePorIdController(req, res) {
  const { id } = req.params;
  const superheroe = obenterSuperheroePorId(parseInt(id));
  if (superheroe) {
    res.send(renderizarSuperheroe(superheroe));
  } else {
    res.status(404).send({ mensaje: "superheroe no encontrado" });
  }
}
export function buscarSuperheroesPorAtributoController(req, res) {
  const { atributo, valor } = req.params;
  const superheroes = buscarSuperheroesPorAtributo(atributo, valor);
  if (superheroes.length > 0) {
    res.send(renderizarListaSuperheroe(superheroes));
  } else {
    res.status(404).send({ mensaje: "no se superheroes con ese atributo" });
  }
}

export function obtenerSuperheroesMayoresDe30Controller(req, res) {
  const superheroes = obtenerSuperheroesMayoresDe30();
  res.send(renderizarListaSuperheroe(superheroes));
}
