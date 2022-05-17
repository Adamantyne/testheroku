import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import db from "./db.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post("/test",async (req,res)=>{
    const body=req.body;
    try {
        await db.collection("test").insertOne(body);
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }
})
app.get("/test",async (req,res)=>{
    const body=req.body;
    try {
        const test = await db.collection("test").find(body).toArray();
        res.send(test);
    } catch (error) {
        res.sendStatus(500);
    }
})

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`servidor ok`);
});