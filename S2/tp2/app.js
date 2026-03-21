// DESARROLLAREMOS METODOS CRUD
// INSERT,UPDATE,DELETE,FIND

// nos conectamos con la base de datos
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://grupo-19:grupo-19@cluster0.blryo.mongodb.net/NodeMod3Cohorte5",
  )
  .then(() => console.log("conexion exitosa a MongoDB"))
  .catch((error) => console.error("error al conectar a mongodb:", error));

//esquema para los superheroes

const superheroSchema = new mongoose.Schema(
  {
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    PlanetaOrigen: { type: String, required: true },
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now },
    creador: String,
  },
  { collection: "Grupo-19" },
);

const SuperHero = mongoose.model("SuperHero", superheroSchema);

//funcion para insertar un superheroe

async function insertSuperHero() {
  const hero = new SuperHero({
    nombreSuperHeroe: "Spiderman",
    nombreReal: "peter parker",
    edad: 26,
    PlanetaOrigen: "Tierra",
    debilidad: "Radioactiva",
    poderes: ["Trepar paredes", "Agilidad"],
    aliados: ["Iroman"],
    enemigos: ["Duende verde"],
    creador: "AlanCode",
  });
  await hero.save();
  console.log("superheroe insertado:", hero);
}

//funcion para actualizar un superheroe

async function updateSuperHero(nombreSuperHeroe) {
  const result = await SuperHero.updateOne(
    { nombreSuperHeroe },
    { $set: { edad: 69 } },
  );
  console.log("resultado de la actulizacion:", result);
}

//funcion para eliminar un super heroe

async function deleteSuperHero(nombreSuperHeroe) {
  const result = await SuperHero.deleteOne({
    nombreSuperHeroe: nombreSuperHeroe,
  });
  console.log("superheroe eliminado:", result);
}

//funcion para buscar superheroes con uan carateristica

async function findSuperHeroes() {
  const heroes = await SuperHero.find({ planetaOrigen: "Tierra" });
  console.log("superheries encontrados:", heroes);
}

insertSuperHero();
updateSuperHero("Spiderman");
deleteSuperHero("Spiderman");
findSuperHeroes();
