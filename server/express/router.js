const express = require('express');

const router = express.Router();
const { getPosts, addPost, upVote } = require('./controllers');



router.get('/posts', getPosts);
/* router.get('/article/:headline', getPostByUrl); */
router.post('/posts', addPost);
router.put('/posts/:id/up', upVote);
module.exports = router;