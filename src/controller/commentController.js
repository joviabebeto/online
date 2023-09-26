import Comment from "../model/comment";
import errorResponse from "../utils/errorResponse";
import successResponse from "../utils/successResponse";

class CommentController {
static async postcomment(req,res){
    const comment=await Comment.create(req.body);
    return successResponse(res,201,`thank you to make comment`,comment)

}
static async getAllcomment(req,res){
    const comment=await Comment.find()
    console.log(`get all`)
}
}
export default CommentController;