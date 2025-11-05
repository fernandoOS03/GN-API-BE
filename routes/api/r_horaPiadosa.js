import {Router} from "express";
import { validateObjectId } from "../../middlewares/validateId.js";
import {getAllHorasPiadosas, getHoraPiadosaById, updateHoraPiadosa, createHoraPiadosa, deleteHoraPiadosa} from "../../controllers/c_horaPiadosa.js"; 

const router = Router();

router.post("/", createHoraPiadosa);
router.get("/", getAllHorasPiadosas);
router.get("/:id", validateObjectId, getHoraPiadosaById);
router.put("/:id", validateObjectId, updateHoraPiadosa);
router.delete("/:id", validateObjectId, deleteHoraPiadosa);

export default router;
