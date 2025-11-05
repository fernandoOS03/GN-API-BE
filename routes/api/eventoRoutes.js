import { Router } from "express";
import { validateObjectId } from "../../middlewares/validateId.js";
import { createEvento, updateEvento, deleteEvento, getAllEventos, getEventoById } from "../../controllers/eventoController.js";

 const router = Router();

router.post("/", createEvento);
router.get("/", getAllEventos);
router.get("/:id", validateObjectId, getEventoById);
router.put("/:id", validateObjectId, updateEvento);
router.delete("/:id", validateObjectId, deleteEvento);

export default router;