const express = require('express');
const router = express.Router();
const {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost
} = require('../controllers/postController');

// Create a new post
router.post('/posts', createPost);

// Get all posts
router.get('/posts', getAllPosts);

// Get a single post by ID
router.get('/posts/:id', getPostById);

// Update a post
router.put('/posts/:id', updatePost);

// Delete a post
router.delete('/posts/:id', deletePost);

module.exports = router;
