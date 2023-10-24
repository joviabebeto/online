
import User from "../model/user";
import errorResponse from "../utils/successResponse";
import successResponse from "../utils/successResponse";
import bcrypt,{ hash } from "bcrypt";
import jwt from "jsonwebtoken"
 

class UserController{
    static async createallUser(req,res){
        const {userName, email, password, role}=req.body;
        try {
          if(password!== req.body.confirmPassword){
            return errorResponse(res,401,`password and confirmpassword is not matched`)
          }  

          const hashpassword=bcrypt.hashSync(req.body.password,10)

            const user = await User.create({userName, email, password:hashpassword, role})
            return successResponse(res,201,`user successfuly created`,user)
        } catch (error) {
            return errorResponse(res,401,`error is :${error}`)
        }
   

     }
     static async getAlluser(req,res){
        const user=await User.find();
        if(!user || user.length ==0){
            return errorResponse(res,401,"user no found");
        }else if(user){
            const status=200;
            const msg=`all ${user.length} user found`;
            const data=user;
            return errorResponse(res,status,msg,data) 
        }
     }
     static async getOneuser(req,res){
        const id= req.params.ido;
        const user=await User.findById(id);
        if(!user){
return errorResponse(res,401,`no user found with that id:${id}`);
        }
        
      }
      static async login(req,res){
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
          // r
          return errorResponse(res,401,`Invalid email or password`)
        }else{
          const comparePassword=bcrypt.compareSync(password,user.password);
          if(!comparePassword){
            return errorResponse(res,401,`Invald email or password`);
          }else{
            const token=jwt.sign({user:user},process.env.SECRET_KEY,{
              expiresIn: "1d",


            });
            return res.status(200).json({
                        token: token,
                        data: {
                        user: user,
                        },
                     });
          }
        }

      }
      static async deleteAllUser(req, res) {
        const user = await User.deleteMany();
        return successResponse(res, 200, "alll users deleted", user);
      }
      static async deleteOneUser(req, res) {
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
          errorResponse(res, 401, `user with id ${id} not found`);
        } else {
          successResponse(res, 200, `user successfuly deleted`, user);
        }
      }
      static async updateUser(req, res) {
        const id = req.params.id;
        const user = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!user) {
          errorResponse(res, 401, `user with id ${id} not found`);
        } else {
          successResponse(res, 200, `user successfuly updated`, user);
        }
      }
 
        
      }

export default UserController