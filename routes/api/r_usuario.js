import { Router } from "express";
import { createUsuario, deleteUsuario, updateUsuario, getAllUsuarios, getUsuarioById } from "../../controllers/c_usuario.js";

const router = Router();

router.post("/", createUsuario);
router.get("/", getAllUsuarios);
router.get("/:id", getUsuarioById);
router.put("/:id", updateUsuario);
router.delete("/:id", deleteUsuario);

export default router;
