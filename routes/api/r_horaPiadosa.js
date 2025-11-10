import { Router } from "express";
import { getAllHorasPiadosas, getHoraPiadosaById, updateHoraPiadosa, createHoraPiadosa, deleteHoraPiadosa, getHraPiadConMinistro } from "../../controllers/c_horaPiadosa.js";

const router = Router();

router.post("/", createHoraPiadosa);
router.get("/", getAllHorasPiadosas);
router.get("/:id", getHoraPiadosaById);
router.get("/:id/ministro", getHraPiadConMinistro);
router.put("/:id", updateHoraPiadosa);
router.delete("/:id", deleteHoraPiadosa);

export default router;
