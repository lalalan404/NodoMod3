//implementa los metodos para intyerctuar con mongodb
import SuperHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroRepository extends IRepository {
  async obtenerPorId(id) {
    return await SuperHero.findById(id);
  }
  async obtenerTodos() {
    return await SuperHero.find({});
  }
  async buscarPorAtributo(atributo, valor) {
    let query;

    // Si el atributo es 'edad', hacemos búsqueda exacta de número
    if (atributo === "edad") {
      query = { [atributo]: Number(valor) };
    } else {
      // Si es texto, usamos la búsqueda flexible con Regex
      query = { [atributo]: { $regex: valor, $options: "i" } };
    }

    return await SuperHero.find(query);
  }

  async obtenerMayoresDe30() {
    // Solo filtra por edad, sin importar el planeta
    return await SuperHero.find({ edad: { $gt: 30 } });
  }
}
export default new SuperHeroRepository();
