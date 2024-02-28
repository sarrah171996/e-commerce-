import { Router } from "express";
import * as userController from './controller/user.js';
import auth from "../../middleware/auth.js";
const router = Router()




// router.get('/', userController.getAllUsers )
// router.post('/' ,auth,userController.addUser)



export default router