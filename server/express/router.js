const express = require('express');
const router = express.Router();
const { getPosts, getTags, getPostsByTag, addPost, upVote, getPostById } = require('./controllers');



router.get('/posts', getPosts);
router.get('/post/:id', getPostById);
router.get('/tags', getTags);
router.get('/posts/:tag', getPostsByTag)
router.post('/posts', addPost);
router.put('/posts/:id/up', upVote);
/* router.get('/article/:headline', getPostByUrl);  */
module.exports = router;