const express = require('express');

const router = express.Router();
const { getPosts, addPost, upVote, getPostById } = require('./controllers');



router.get('/posts', getPosts);
router.get('/post/:id', getPostById);
router.post('/posts', addPost);
router.put('/posts/:id/up', upVote);
/* router.get('/article/:headline', getPostByUrl);  */
module.exports = router;