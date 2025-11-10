import { Router } from "express";
import { getAllTipoEventos, getTipoEventoById, createTipoEvento, updateTipoEvento, deleteTipoEvento } from "../../controllers/c_tipoEvento.js"; 

const router = Router();

router.post("/", createTipoEvento);
router.get("/", getAllTipoEventos);
router.get("/:id", getTipoEventoById);
router.put("/:id", updateTipoEvento);
router.delete("/:id", deleteTipoEvento);

export default router;