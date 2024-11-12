import express from "express";
import db from "../db/conn.js"
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  const collection = db.collection("users");
  const users = await collection.find().limit(10).toArray();
  res.json(users);
});

router.get("/:id", async (req, res)=>{
  const userId = new ObjectId(req.params.id);
  console.log(userId);
   const collection = db.collection("users");
   const result = await collection.findOne({_id: userId});
   console.log(result);
   res.status(200).json(result);

   
  ;
})

router.post("/", async (req, res)=>{
  // res.json(req.body)
  const collection = db.collection("users")
  const result = await collection.insertOne(req.body)
  res.status(201).json(result);
})

export default router;
