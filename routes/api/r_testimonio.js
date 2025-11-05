import {Router} from "express";
import { validateObjectId } from "../../middlewares/validateId.js";
import {createTestimonio, deleteTestimonio, updateTestimonio, getAllTestimonios, getTestimonioById} from "../../controllers/c_testimonio.js";

const router = Router();

router.post("/", createTestimonio);
router.get("/", getAllTestimonios);
router.get("/:id", validateObjectId, getTestimonioById);
router.put("/:id", validateObjectId, updateTestimonio);
router.delete("/:id", validateObjectId, deleteTestimonio);

export default router;
