const express = require('express');
const router = express.Router();
const { getPosts, getTags, getPostsByTag, addPost, upVote, getPostById, searchPosts } = require('./controllers');


router.get('/posts/:tag', getPostsByTag);
router.get('/posts/search/:term', searchPosts);
router.get('/posts', getPosts);
router.get('/post/:id', getPostById);
router.get('/tags', getTags);
router.post('/posts', addPost);
router.put('/posts/:id/up', upVote);

module.exports = router;