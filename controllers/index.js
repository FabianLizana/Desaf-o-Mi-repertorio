import {
  getCancionesQuery,
  agregarCancionQuery,
  deleteCancionQuery,
  editarCancionQuery,
} from "../queries/consultas.js";

export function renderHome(req, res) {
  res.sendFile("views/index.html", { root: "." });
}

// PASO 2 PREGUNTA 1: La cual hace uso de la siguiente crearCancion:
export async function crearCancion(req, res) {
  const data = Object.values(req.body);
  try {
    const resultado = await agregarCancionQuery(data);
    res.status(200).send(resultado);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// PASO 2 PREGUNTA 2: La cual hace uso de la siguiente función obtenerCanciones:
export async function obtenerCanciones(req, res) {
  try {
    const canciones = await getCancionesQuery();
    res.status(200).json(canciones);
  } catch (error) {
    res.redirect("/");
    res.status(500).send(error.message);
  }
}

// PASO 2 PREGUNTA 4: He creado la siguiente ruta para eliminar canciones en la tabla canciones de la base de datos repertorio:
export async function borrarCancion(req, res) {
  const { id } = req.query;
  try {
    const cancionBorrada = await deleteCancionQuery(id);
    res.status(200).json(cancionBorrada);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// PASO 2 PREGUNTA 3: La cual hace uso de la siguiente función editarCancion:
export async function editarCancion(req, res) {
  const { id } = req.params;
  const data = Object.values(req.body);
  try {
    const cancionEditada = await editarCancionQuery(id, data);

    res.status(200).send(cancionEditada);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export function rutaNoEncontrada(req, res) {
  res.status(404).send("Página no encontrada");
}
