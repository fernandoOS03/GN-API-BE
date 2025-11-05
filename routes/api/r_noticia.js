import {Router} from "express";
import { validateObjectId } from "../../middlewares/validateId.js";
import {createNoticia, deleteNoticia, updateNoticia, getAllNoticias, getNoticiaById} from "../../controllers/c_noticia.js";

const router = Router();

router.post("/", createNoticia);
router.get("/", getAllNoticias);
router.get("/:id", validateObjectId, getNoticiaById);
router.put("/:id", validateObjectId, updateNoticia);
router.delete("/:id", validateObjectId, deleteNoticia);

export default router;
