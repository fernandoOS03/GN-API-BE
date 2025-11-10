import { Router } from "express";
import { createSedeNacional, deleteSedeNacional, updateSedeNacional, getAllSedesNacionales, getSedeNacionalById, getSedeConMinistro } from "../../controllers/c_sedeNacional.js";

const router = Router();

router.post("/", createSedeNacional);
router.get("/", getAllSedesNacionales);
router.get("/:id", getSedeNacionalById);
router.get("/:id/ministro", getSedeConMinistro);
router.put("/:id", updateSedeNacional);
router.delete("/:id", deleteSedeNacional);

export default router;
