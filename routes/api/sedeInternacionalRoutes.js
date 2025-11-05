import {Router} from "express";
import { validateObjectId } from "../../middlewares/validateId.js";
import {createSedeInternacional, deleteSedeInternacional, updateSedeInternacional, getSedeInternacionalById, getAllSedesInternacionales} from "../../controllers/sedeInternacionalController.js";

const router = Router();

router.post("/", createSedeInternacional);
router.get("/", getAllSedesInternacionales);
router.get("/:id", validateObjectId, getSedeInternacionalById);
router.put("/:id", validateObjectId, updateSedeInternacional);
router.delete("/:id", validateObjectId, deleteSedeInternacional);

export default router;
