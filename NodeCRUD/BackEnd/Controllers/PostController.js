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

//function to create an new item []
exports.createPost = async (req, res) => {
    //we use mongoDB's save functionality here
    await new Posts(req.body).save((err, data) => {
        if(err){
            //if there is an error send the following response
            res.status(500).json({
                message: "Something went wrong, please try again later"
            });
        } else {
            //if success send the following response
            console.log(req.body)
            res.status(200).json({
                message: "Item created",
                data,
            });
        }
    });
};