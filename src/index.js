import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

// dotenv.config({
//     path: './.env'
// })
dotenv.config();
console.log("port",process.env.PORT)

connectDB()
.then(()=> {
    app.listen(process.env.PORT || 5000,  () => {
        console.log(`Server is running at ${process.env.PORT}`)
    })
})
.catch((err)=> {console.log("MongoDB connection Failed")})







// import express from "express"
// import { error } from "console";

// const app = express()

// (async() => {
//     try {
//        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//        app.on("error", (err) => {
//         console.log("Err :" , error)
//         throw error;
//        })

//        app.listen(process.env.PORT, () => {
//         console.log(`App is listening at ${PORT}`)
//        })
        
//     } catch (error) {
//         console.error("Error :", error)
//         throw error
        
//     }
// })()