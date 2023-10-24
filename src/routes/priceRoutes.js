import express from "express"
import  priceController from "../controller/priceController"

const router=express.Router()

router.post("/",priceController.createprice)
export default router