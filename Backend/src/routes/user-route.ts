import express from "express";

import { getUsersAdmin } from "@/controllers/api";


const router = express.Router();



router.get("/api/check", (req, res) => {
    const { user } = req.body;
    console.log(user);  
    res.status(200).json("Server is running");
  });

  router.get("/api/admin", getUsersAdmin);
export default router;
