import express from "express";

//crear una intcia de express
const app = express();

//configurar el puerto en el que el servidor escuchara
const PORT = 3000;

//ruta GET para el Home
//ruta basica http://localhost:3000/
app.get("/", (req, res) => {
  res.send("hola,mundo");
});

//ruta GET para recibir datos simples
//ruta basica http://localhost:3000/data
app.get("/data", (req, res) => {
  res.send("datos recibidos");
});

//RUTEO CON PARAMETROS

//ruta  GET con parametro de ruta
//solicitud : http://localhost:3000/user/123
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`perfil del usuario con ID: ${userId}`);
});

//solicitud : http://localhost:3000/product/electronics/456
app.get("/product/:category/:id", (req, res) => {
  const { category, id } = req.params;
  res.send(`categoria: ${category}, ID del producto${id}`);
});

//RUTEO CON CONSULTAS

//ruta GET con parametro de consulta
//solicitud : http://localhost:3000/search?q=javascript
app.get("/search", (req, res) => {
  const query = req.query.q;
  res.send(`resultados de al bsuqueda para :${query}`);
});

//ruta GET con multiples parametros de consulta
//solicitud : http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50
app.get("/filter", (req, res) => {
  const { type, minPrice, maxPrice } = req.query;
  res.send(
    `filtrar por tipo: ${type}, rango de precios : ${minPrice} - ${maxPrice}`,
  );
});

//inicar el servidor
app.listen(PORT, () => {
  console.log(`servidor coriiendo en http://localhost:${PORT}`);
});
