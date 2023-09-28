import express from "express";
import CommentController from "../controller/commentController";
import VerifyAccess from "../middlewares/verifyAccess";

const router = express.Router();
router.post("/",CommentController.postcomment)
 router.get("/", CommentController.getAllcomment);
 router.get("/:id", CommentController.getOnecomment);
 router.delete("/:id",CommentController.deleteAllComment)
 router.delete("/:id",CommentController.deleteOneComment)

export default router;