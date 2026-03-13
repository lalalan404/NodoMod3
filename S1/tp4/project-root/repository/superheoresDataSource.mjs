//abstraccion de la persistencia
export default class SuperheroesDataSource {
  //metodo abstracto para obteer todo los heroes
  obtenerTodos() {
    throw new Error("este metodo debe ser implementado por la subclase");
  }
}
