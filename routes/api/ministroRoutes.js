import { Router } from "express";
import { createMinistro, deleteMinistro, updateMinistro, getAllMinistros, getMinistroById } from "../../controllers/ministroController.js";

const router = Router();

router.post("/", createMinistro);
router.get("/", getAllMinistros);
router.get("/:id", getMinistroById);
router.put("/:id", updateMinistro);
router.delete("/:id", deleteMinistro);

export default router;
