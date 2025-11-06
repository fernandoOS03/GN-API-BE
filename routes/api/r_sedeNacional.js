import {Router} from "express";
import { validateObjectId } from "../../middlewares/validateId.js";
import {createSedeNacional, deleteSedeNacional, updateSedeNacional, getAllSedesNacionales, getSedeNacionalById, getSedeConMinistro} from "../../controllers/c_sedeNacional.js";

const router = Router();

router.post("/", createSedeNacional);
router.get("/", getAllSedesNacionales);
router.get("/:id", validateObjectId, getSedeNacionalById);
router.get("/:id/ministro", validateObjectId, getSedeConMinistro);
router.put("/:id", validateObjectId, updateSedeNacional);
router.delete("/:id", validateObjectId, deleteSedeNacional);

export default router;
