import { Router } from "express";
import { validateObjectId } from "../../middlewares/validateId.js";
import { createMinistro, deleteMinistro, updateMinistro, getAllMinistros, getMinistroById } from "../../controllers/c_ministro.js";

const router = Router();

router.post("/", createMinistro);
router.get("/", getAllMinistros);
router.get("/:id", validateObjectId, getMinistroById);
router.put("/:id", validateObjectId, updateMinistro);
router.delete("/:id", validateObjectId, deleteMinistro);

export default router;
