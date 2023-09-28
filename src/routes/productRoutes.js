import express from "express";
import productController from "../controller/productController";


const router = express.Router()

router.post("/",productController.createproduct)
router.get("/",productController.getAllproduct)
router.get("/:id",productController.getOneproduct)


export default router;