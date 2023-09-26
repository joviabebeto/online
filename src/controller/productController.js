import product from "../model/product";
import errorResponse from "../utils/successResponse";
import successResponse from "../utils/successResponse";
import bcrypt,{ hash } from "bcrypt";
import jwt from "jsonwebtoken"
 

class productController{
    static async createproduct(req,res){
      const {newsproduct, productTitle,productprice,productImages}=req.body
      const products=await product.create(req.body)
      if(!products){
        return errorResponse(res,401,`product is not new`)
      }else if(products){
        return successResponse(res,201,`product is  new`,products)
      }
     }
     static async getAllproduct(req,res){
        const producted=await product.find();
        if(!producted || producted.length ==0){
            return errorResponse(res,401,"product is no found");
        }else if(producted){
            const status=200;
            const msg=`all ${producted.length} product found`;
            const data=producted;
            return errorResponse(res,status,msg,producted) 
        }
     }
     static async getOneproduct(req,res){
        const id= req.params.ido;
        const producta=await producta.findById(id);
        if(!producta){
return errorResponse(res,401,`no user found with that id:${id}`);
        }
        
     }
}
export default productController