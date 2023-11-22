import mongoose from "mongoose"

export const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            dbName:"swc-db"
        })
        console.log("Mongo db connected...")
    } catch (error) {
        console.log("Error :>"+error)
    }
}