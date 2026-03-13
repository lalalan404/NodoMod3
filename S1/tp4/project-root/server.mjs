import express from "express";
import {
  obenterSuperheroePorIdController,
  buscarSuperheroesPorAtributoController,
  obtenerSuperheroesMayoresDe30Controller,
} from "./controllers/superheroesController.mjs";

const app = express();
const PORT = 3005;

//rutas
app.get("/superheroes/id/:id", obenterSuperheroePorIdController);
app.get(
  "/superheroes/:atributo/:valor",
  buscarSuperheroesPorAtributoController,
);
app.get("/superheroes/edad/mayorA30", obtenerSuperheroesMayoresDe30Controller);

//levantar el servidor en el puerto 3005
app.listen(PORT, () => {
  console.log(`servidor coriiendo en http://localhost:${PORT}`);
});
