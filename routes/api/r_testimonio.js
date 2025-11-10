import { Router } from "express";
import { createTestimonio, deleteTestimonio, updateTestimonio, getAllTestimonios, getTestimonioById } from "../../controllers/c_testimonio.js";

const router = Router();

router.post("/", createTestimonio);
router.get("/", getAllTestimonios);
router.get("/:id", getTestimonioById);
router.put("/:id", updateTestimonio);
router.delete("/:id", deleteTestimonio);
export default router;
