import express from "express";

import { getUsersAdmin } from "@/controllers/api";


const router = express.Router();



router.get("/check", (req, res) => {
    const { user } = req.body;
    console.log(user);  
    res.send("Server is running");
  });

  router.get("/admin", getUsersAdmin);
export default router;
