//configuracion de la coneccion a mongodb
import mongoose from "mongoose";
export async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://grupo-19:grupo-19@cluster0.blryo.mongodb.net/NodeMod3Cohorte5",
    );
    console.log("exito con la conexion a mongodb");
  } catch (error) {
    console.log("error con la conexion a mongodb", error);
    process.exit(1);
  }
}
