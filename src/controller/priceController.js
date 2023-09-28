import price from "../model/price"
import errorResponse from "../utils/successResponse";
import successResponse from "../utils/successResponse";


 

class priceController{
    static async createprice(req,res){
      const {stableprice,unstableprice}=req.body
      const priced=await price.create(req.body)
      if(!priced){
        return errorResponse(res,401,`product is not new`)
      }else if(priced){
        return successResponse(res,201,`product is  new`,priced)
      }
     }
    //  static async getAllproduct(req,res){
    //     const producted=await product.find();
    //     if(!producted || producted.length ==0){
    //         return errorResponse(res,401,"product is no found");
    //     }else if(producted){
    //         const status=200;
    //         const msg=`all ${producted.length} product found`;
    //         const data=producted;
    //         return errorResponse(res,status,msg,producted) 
    //     }
    //  }

    //  static async getOneproduct(req, res) {
    //   const { id } = req.params;
    //   const producting = await product.findOne({ _id: id });
    //   try {
    //     if (!producting) {
    //       return errorResponse(res, 401, `news with id ${id} not found`);
    //     } else {
    //       return successResponse(
    //         res,
    //         200,
    //         `news successfuly retrieved with ${news.comment.length} comments`,
    //         news
    //       );
    //     }
    //   } catch (error) {
    //     return errorResponse(res, 404, error);
    //   }
    // }
    //  static async like(req, res) {
   
    //   const productId = req.params.id;
    
    //   const products = await product.findById({ _id: productId });
    //   if (!products) {
    //     return errorResponse(res, 401, `product is not found`);
    //   } else {
      
    //     const userId = req.user._id;
  
      
    //     if (products.likes.includes(userId)) {
    //       return errorResponse(res, 401, "you already like the product");
    //     } else {
       
    //       if (products.dislikes.includes(userId)) {
    //         products.dislikes.pull(userId);
    //       }
        
    //       products.likes.push(userId);
    //       products.save();
    //       return successResponse(
    //         res,
    //         200,
    //         `like from ${req.user.userName}`,
    //         products
    //       );
    //     }
     
    //   }
    // }
    // static async dislike(req, res) {
    //   const productId = req.params.id;
    //   const producted = await product.findById({ _id: productId });
    //   if (!producted) {
    //     return errorResponse(res, 401, `product not found`);
    //   } else {
    //     const userId = req.user._id;
    //     if (producted.dislikes.includes(userId)) {
    //       return errorResponse(res, 401, `you already disliked of product`);
    //     }
    //     if (producted.likes.includes(userId)) {
    //       producted.likes.pull(userId);
    //     }
    //     producted.dislikes.push(userId);
    //     producted.save();
    //     return successResponse(
    //       res,
    //       200,
    //       `you dislike ${req.user.userName}`,
    //       producted
    //     );
    //   }
    // }
}
export default priceController