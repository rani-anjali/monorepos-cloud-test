import express from "express";
import { client } from "@repo/db/client"

const app = express();

app.use(express.json());

app.get("/",(req, res)=>{
    res.send("hello World")
})

app.post("/signup",async (req, res)=>{
   const username = req.body.username;
   const password = req.body.password;
   const user = await client.user.create({
    data:{
        username:username,
        password:password
    }
   })
   res.json({
    message:"Sign up sucessfully",
    id: user.id
   });
})

app.post("/signin",(req, res)=>{
    res.send("hello World")
})

app.get("/chat",(req, res)=>{
    res.send("hello World")
})

app.listen(3003);

