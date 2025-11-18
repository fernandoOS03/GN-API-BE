import { Router } from "express";
import { protect } from "../../middlewares/auth.js";
import { checkRole } from "../../middlewares/role.js";
import { createUsuario, deleteUsuario, updateUsuario, getAllUsuarios, getUsuarioById } from "../../controllers/c_usuario.js";

const router = Router();

router.get("/", protect, checkRole(['super_admin','admin']), getAllUsuarios);
router.get("/:id", protect, checkRole(['super_admin','admin']), getUsuarioById);
router.put("/:id", protect, checkRole(['super_admin']), updateUsuario);
router.delete("/:id", protect, checkRole(['super_admin']), deleteUsuario);
//router.post("/", checkRole(['super_admin']), createUsuario);
router.post("/", createUsuario);

export default router;
`x`