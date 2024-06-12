import  express from "express"
const app=express()
import cors from "cors"
import cookieParser from "cookie-parser"

app.use(cors())
app.use(cookieParser())
app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true,limit:"20kb"}))
app.use(express.static("public"))


export default app















// import express from "express"
// const app=express()

// export default app
// // export {app}
