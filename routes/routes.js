import express from "express";
import {
  renderHome,
  crearCancion,
  obtenerCanciones,
  borrarCancion,
  editarCancion,
  rutaNoEncontrada,
} from "../controllers/index.js";

const router = express.Router();
router.get("/", renderHome);

// 1. Crear una ruta POST /cancion que reciba los datos correspondientes a una canción y 
// realice a través de una función asíncrona la inserción en la tabla canciones (3 Puntos)
// ---PASO 1---La ruta creada es la siguiente:
router.post("/cancion", crearCancion);

// 2.Crear una ruta GET /canciones que devuelva un JSON con los registros de la tabla canciones. (2 Puntos)
// --PASO 1---La ruta creada es la siguiente:
router.get("/canciones", obtenerCanciones);

// 4.Crear una ruta DELETE /cancion que reciba por queryString el id de una canción y 
// realiza una consulta SQL a través de una función asíncrona para eliminarla de la base de datos. (2 Puntos)
// ---PASO 1---He creado la siguiente ruta para eliminar canciones en la tabla canciones de la base de datos repertorio:
router.delete("/cancion", borrarCancion);

// 3. Crear una ruta PUT /cancion que reciba los datos de una canción que se desea editar, 
// ejecuta una función asíncrona para hacer la consulta SQL correspondiente y actualice ese registro de la tabla canciones. (3 Puntos)
// ---PASO 1--He creado la siguienta ruta PUT:
router.put("/cancion/:id", editarCancion);

router.get("/*", rutaNoEncontrada);

export default router;
