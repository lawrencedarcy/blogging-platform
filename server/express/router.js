const express = require('express');
const router = express.Router();
const { getPosts, 
        getTags, 
        getPostsByTag, 
        addPost, 
        upVote, 
        getPostById, 
        searchPosts, 
        addUser, 
        getUser, 
        editUser, 
        getList,
        deleteFromList,
        editBio,
        getReading
       } = require('./controllers');


router.get('/posts/:tag', getPostsByTag);
router.get('/posts/search/:term', searchPosts);
router.get('/posts', getPosts);
router.get('/list', getList);
router.get('/reading/:name', getReading);
router.put('/list/:name', deleteFromList);
router.get('/post/:id', getPostById);
router.get('/tags', getTags);
router.get('/users/:name', getUser);
router.put('/users/:name', editUser);
router.put('/bio/:name', editBio);
router.post('/users', addUser);
router.post('/posts', addPost);
router.put('/posts/:id/up', upVote);

module.exports = router;