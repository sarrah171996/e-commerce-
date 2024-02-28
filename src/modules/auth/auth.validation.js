
import joi from 'joi'
import { generalFields } from '../../middleware/validation.js'

export const  signUp = joi.object({
    email :generalFields.email,
    password :generalFields.password,
    cPassword :generalFields.cPassword.valid(joi.ref('password')),
    
    userName :joi.string().min(2).max(20).required(),


}).required()


export const  login = joi.object({
    email :generalFields.email,
    password :generalFields.password,
    


}).required()


export const  sendCode = joi.object({    
    email :generalFields.email,



}).required()


export const  newPassword = joi.object({
    code :joi.string().pattern(new RegExp(/^[0-9]{4}$/)).required(),
    email :generalFields.email,
    password :generalFields.password,
    cPassword :generalFields.cPassword.valid(joi.ref('password')),

}).required()



export const token =joi.object({ token :joi.string().required()}).required()
