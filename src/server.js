import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routes/index"

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use("api/v1",router);
const database = process.env.DATABASE;
const port = process.env.PORT;




app.listen(port,()=>{
    console.log(`port running on..${port}`)
});

mongoose.connect(database).then(()=>{
    console.log(`database successfuly connected`)
})
.catch((error)=>{
    console.log(error)
})

export default app;