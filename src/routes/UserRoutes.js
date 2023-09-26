import express from "express";
import userController from "../controller/userController";
import DataChequer from "../middlewares/datachequer";
import Validator from "../middlewares/validator";
import VerifyAccess from "../middlewares/verifyAccess";


const router = express.Router()
router.post(
    "/",
    DataChequer.userRegisterIsEmpty,
    
    Validator.userAccountRule(),
    Validator.inputValidator,
    userController.createUser
  );
  router.get("/", VerifyAccess("admin"), userController.getAlluser);
  router.delete("/", VerifyAccess("admin"), userController.deleteAllUser);
  router.get("/:ido", userController.getOneuser);
  router.delete("/:id", userController.deleteOneUser);
  router.patch("/:id", userController.updateUser);
  router.post("/login", userController.login);
  


export default router;