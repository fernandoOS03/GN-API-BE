import {Router} from "express";
import { validateObjectId } from "../../middlewares/validateId.js";
import {createUsuario, deleteUsuario, updateUsuario, getAllUsuarios, getUsuarioById} from "../../controllers/usuarioController.js";

const router = Router();

router.post("/", createUsuario);
router.get("/", getAllUsuarios);
router.get("/:id", validateObjectId, getUsuarioById);
router.put("/:id", validateObjectId, updateUsuario);
router.delete("/:id", validateObjectId, deleteUsuario);

export default router;
