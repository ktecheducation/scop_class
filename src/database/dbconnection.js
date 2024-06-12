import mongoose from "mongoose";
const dburl=process.env.DB_URL
const dbname=process.env.DB_NAME

const dbconnect=async()=>{
    await mongoose.connect(`${dburl}/${dbname}`).then((connection)=>{
            console.log("db connect ok ")
            // console.log(connection.Connection.host)
    }).catch((err)=>{
        console.log("error :----",err)
        process.exit(1)
    })

}
export default dbconnect