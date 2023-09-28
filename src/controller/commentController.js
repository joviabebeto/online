import Comment from "../model/comment";
import errorResponse from "../utils/errorResponse";
import successResponse from "../utils/successResponse";

class CommentController {
static async postcomment(req,res){
    const comment=await Comment.create(req.body);
    return successResponse(res,201,`thank you to make comment${comment.length}`,comment)

}
static async getAllcomment(req,res){
    const comment=await Comment.find()
    console.log(`get all`)
}
static async getOnecomment(req, res) {
    const id = req.params.id;
    const getComment = await Comment.findById({ _id: id });
    if (!getComment) {
      return errorResponse(res, 401, "comment not found");
    } else {
      return successResponse(res, 200, `comment successfuly `);
    }
  }
  static async deleteAllComment(req, res) {
    const id = req.params.id;
    const deleteComment = await Comment.findByIdAndDelete({ _id: id });
    if (!deleteComment) {
      return errorResponse(res, 401, "comment not found");
    } else {
      return successResponse(res, 200, `comment successfuly deleted`);
    }
  }
  static async deleteOneComment(req, res) {
    const id = req.params.id;
    const deleteComment = await Comment.findByIdAndDelete({ _id: id });
    if (!deleteComment) {
      return errorResponse(res, 401, "comment not found");
    } else {
      return successResponse(res, 200, `comment successfuly deleted`);
    }
  }
  static async updatecomment(req,res){
    const comment=await Comment.findOneAndUpdate(req.body);
    console.log(`changed comment`)
  }
}
export default CommentController