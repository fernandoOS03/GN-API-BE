import { Router } from "express";
import { getAllCargos, getCargoById, createCargo, updateCargo } from "../../controllers/c_cargo.js"; 

const router = Router();

router.post("/", createCargo);
router.get("/", getAllCargos);
router.get("/:id",getCargoById);
router.put("/:id", updateCargo);
/*router.delete("/:id", validateObjectId, deleteCargo);*/

export default router;