import express from "express";
import userRoutes from "./UserRoutes";
import productRoutes from "./productRoutes"
import commentRoutes from "./commentRoutes"
import priceRoutes from "./priceRoutes"

const router=express.Router();
router.use("/user",userRoutes)
router.use("/product",productRoutes)
router.use("/comment",commentRoutes)
router.use("/price",priceRoutes)


export default router