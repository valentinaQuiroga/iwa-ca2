//import mongoose to use our model
const express = require('express');
const router = express.Router();

//import the controller file for functions
const postController = require('../Controllers/PostController')

//use
router.get('/', postController.baseRoute);

router.get('/getPosts', postController.getPosts);

//create
router.post('/create', postController.createPost);

//export the app
module.exports = router;