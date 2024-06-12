import "dotenv/config"
import app from "./app.js"
import dbconnect from "./database/dbconnection.js"
const port=process.env.PORT || 4000
dbconnect().then(()=>{
    app.listen(port,()=>{
        console.log("app is listenning ")
    })
})
.catch((err)=>{
        console.log(err)
})














// import mongoose from "mongoose";
// import "dotenv/config"
// import app from "./app.js"

// export const connectdb= async ()=>{
//     try{
//        await  mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
//        console.log("db connected")

//     }catch(err){
//         console.log(err)
//     }
// }
// connectdb()
// .then(()=>{
//     app.listen(process.env.PORT||4000,()=>{
//         console.log("app is listening ")
//     })
// })
// .catch((err)=>{
//     console.log(err)
// })








// // function connectdb(){
// //     try{
// //         mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
// //         console.log("db connected")

// //     }catch(err)
// //     {
// //         console.log(err)
// //     }

// // }
// // connectdb()
// // ;(async ()=>{
// //     try{
// //             await  mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
// //             console.log("db connected")

// //         }catch(err){
// //             console.log(err)
// //         }
// // })()