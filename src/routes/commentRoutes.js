import express from "express";
import CommentController from "../controller/commentController";
import VerifyAccess from "../middlewares/verifyAccess";

const router = express.Router();
router.post("/",CommentController.postcomment)
 router.get("/", CommentController.getAllcomment);
// router.delete("/:id", CommentController.);

export default router;