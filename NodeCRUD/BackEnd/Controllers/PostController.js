const mongoose = require("mongoose");

//next we import our posts model
const Posts = mongoose.model('posts');

// move routes from app.js
exports.baseRoute = async (req, res) => {
    res.send('Server Running');
}

//function to get posts on route "/getPosts"
exports.getPosts = async (req, res) => {
    const posts = await Posts.find();
    res.json(posts);
    console.log(JSON.stringify(posts, null, 3));
   

    
}