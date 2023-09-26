import express from "express";
import userRoutes from "./UserRoutes";
import productRoutes from "./productRoutes"
import commentRoutes from "./commentRoutes"

const router=express.Router();
router.use("/user",userRoutes)
router.use("/product",productRoutes)
router.use("/comment",commentRoutes)

export default router