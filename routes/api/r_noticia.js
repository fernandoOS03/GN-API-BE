import { Router } from "express";
import { createNoticia, deleteNoticia, updateNoticia, getAllNoticias, getNoticiaById } from "../../controllers/c_noticia.js";

const router = Router();

router.post("/", createNoticia);
router.get("/", getAllNoticias);
router.get("/:id", getNoticiaById);
router.put("/:id", updateNoticia);
router.delete("/:id", deleteNoticia);

export default router;
