//Rutas de las apis

import { Router } from "express";
import {
  getPost,
  createPost,
  updatePost,
  removePost,
  getPosts,
} from "../controllers/post.controllers.js";

const router = Router();

//GetAll
router.get("/posts", getPosts);
//GetOne
router.get("/posts/:id", getPost);
//Post
router.post("/posts", createPost);
//Put
router.put("/posts/:id", updatePost);
//Delete
router.delete("/posts/:id", removePost);

export default router;