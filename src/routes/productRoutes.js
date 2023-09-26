import express from "express";
import productController from "../controller/productController";


const router = express.Router()

router.post("/",productController.createproduct)
router.get("/",productController.getAllproduct)


export default router;