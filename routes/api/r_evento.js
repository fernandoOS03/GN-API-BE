import { Router } from "express";
import { createEvento, updateEvento, deleteEvento, getAllEventos, getEventoById } from "../../controllers/c_evento.js";

const router = Router();

router.post("/", createEvento);
router.get("/", getAllEventos);
router.get("/:id", getEventoById);
router.put("/:id", updateEvento);
router.delete("/:id", deleteEvento);

export default router;