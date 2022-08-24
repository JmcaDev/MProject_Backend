import express from "express"
import {
    obtenerProyectos,
    obtenerProyecto,
    nuevoProyecto,
    editarProyecto,
    eliminarProyecto,
    eliminarColaborador,
    agregarColaborador,
    buscarColaborador
} from "../controllers/proyectoController.js"
import checkAuth from "../middleware/checkAuth.js"
const router = express.Router()

// router.get("/", checkAuth, obtenerProyectos)
// router.post("/", checkAuth, nuevoProyecto)

router.route("/").get(checkAuth, obtenerProyectos).post(checkAuth, nuevoProyecto)

router.route("/:id").get(checkAuth, obtenerProyecto).put(checkAuth,editarProyecto).delete(checkAuth,eliminarProyecto)

router.post("/colaboradores", checkAuth, buscarColaborador)
router.post("/colaborador/:id", checkAuth, agregarColaborador)
router.post("/eliminar-colaborador/:id", checkAuth, eliminarColaborador)

export default router