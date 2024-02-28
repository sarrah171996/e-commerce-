import userModel from "../../../../DB/model/User.model.js";
import { asyncHandler } from "../../../utils/errorHandling.js";



export const getAllUsers = asyncHandler(async(req, res , next)=> {
    const user = await userModel.find()
    return res.status(200).json({msg: 'done' , data : user})
})


// export const addUser = asyncHandler(async(req, res , next)=>{
//     const {email} =  req.body;
//     const user = await userModel.findOne({email})
//     if(user){
//         return new Error('Email is already in use', {cause : 400})
//     }

// //     const newUser = await userModel.create(req.body)
// //    await newUser.save()

// //    console.log(newUser); 
// //    return res.status(201).json({msg : 'done' , newUser})

// console.log('hi');



// })   

   