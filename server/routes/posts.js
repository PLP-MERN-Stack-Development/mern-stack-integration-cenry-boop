import express from "express";
import { body, validationResult } from "express-validator";
import Post from "../models/Post.js";

const router = express.Router();

// GET all posts
router.get("/", async (req, res) => {
  const posts = await Post.find().populate("category");
  res.json(posts);
});

// POST new post
router.post(
  "/",
  body("title").notEmpty(),
  body("content").notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  }
);

export default router;
