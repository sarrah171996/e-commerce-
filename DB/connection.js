import mongoose from 'mongoose'
const connectDB  = async ()=>{
    // console.log(process.env.DB_LOCAL);
    return await mongoose.connect(process.env.DB_OLINE||5050)
    // return await mongoose.connect(process.env.DB_LOCAL||5050)

    // return await mongoose.connect('mongodb+srv://sarrah:sarrah@cluster0.nzswuar.mongodb.net/EcommerceOurTeam')
    .then(res=>console.log(`DB Connected successfully on .........`))
    .catch(err=>console.log(` Fail to connect  DB.........${err} `))
} 

export default connectDB;   
 
