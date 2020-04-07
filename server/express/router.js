const express = require('express');

const router = express.Router();
const { getPosts, addPost, upVote } = require('./controllers');



router.get('/posts', getPosts);
router.post('/posts', addPost);
router.put('/posts/:id/up', upVote);
module.exports = router;