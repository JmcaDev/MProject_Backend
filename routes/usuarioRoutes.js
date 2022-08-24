import express from "express"
const router = express.Router()
import {registrar, autenticar, confirmar, resetPassword, comprobarToken, nuevoPassword, perfil} from "../controllers/usuarioController.js"
import checkAuth from "../middleware/checkAuth.js"

//*Autentificacion, Registro y Confirmacion de Usuarios
router.post("/", registrar)//*Crea un nuevo usuario
router.post("/login", autenticar)
router.get("/confirmar/:token", confirmar)
router.post("/resetPassword", resetPassword)
// router.get("/resetPassword/:token", comprobarToken)
// router.post("/resetPassword/:token", nuevoPassword)
router.route("/resetPassword/:token").get(comprobarToken).post(nuevoPassword)

router.get("/perfil", checkAuth, perfil)

export default router