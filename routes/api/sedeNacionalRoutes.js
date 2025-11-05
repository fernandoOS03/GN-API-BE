import {Router} from "express";
import { validateObjectId } from "../../middlewares/validateId.js";
import {createSedeNacional, deleteSedeNacional, updateSedeNacional, getAllSedesNacionales, getSedeNacionalById} from "../../controllers/sedeNacionalController.js";

const router = Router();

router.post("/", createSedeNacional);
router.get("/", getAllSedesNacionales);
router.get("/:id", validateObjectId, getSedeNacionalById);
router.put("/:id", validateObjectId, updateSedeNacional);
router.delete("/:id", validateObjectId, deleteSedeNacional);

export default router;
