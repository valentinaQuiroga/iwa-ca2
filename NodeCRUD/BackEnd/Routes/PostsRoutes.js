//import mongoose to use our model
const express = require('express');
const router = express.Router();

const postController = require('../Controllers/PostController')

//use
router.get('/', postController.baseRoute);

router.get('/getPosts', postController.getPosts);

//export the app
module.exports = router;