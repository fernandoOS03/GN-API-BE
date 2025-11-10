import {Router} from "express";
import {createSedeInternacional, deleteSedeInternacional, updateSedeInternacional, getSedeInternacionalById, getAllSedesInternacionales} from "../../controllers/c_sedeInternacional.js";

const router = Router();

router.post("/", createSedeInternacional);
router.get("/", getAllSedesInternacionales);
router.get("/:id", getSedeInternacionalById);
router.put("/:id", updateSedeInternacional);
router.delete("/:id", deleteSedeInternacional);

export default router;
