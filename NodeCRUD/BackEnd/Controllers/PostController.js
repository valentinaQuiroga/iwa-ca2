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

//function to get a single post
exports.getSinglePost = async (req, res) => {
    //get the id from url by using req.params
    let postID = req.params.id;
    //we use mongoDB's findById() functionality here
    await Posts.findById({ _id: postID}, (err, data) => {
        if(err) {
            res.status(500).json({
                message: "Error in getting specific item",
            });
        } else {
            console.log(data);
            res.status(200).json({
                message: "Item found",
                data
            });
        }
    });
};

//function to update a single item
exports.updatePost = async (req, res) => {
    //get a item ID
    let postID = req.params.id;

    //I will use findByIdAndUpdate function
    await Posts.findByIdAndUpdate({_id: postID}, {$set : req.body}, (err, data) => {
        if (err) {
            res.status(500).json({
                message: "No such item was updated",
            });
        } else {
            console.log("Item ID: " + postID + " Updated Successfully");
            res.status(200).json({
                message: "Item updated",
                data,
            });
        }
    })
}

//function to delete a post from the DB
exports.deletePost = async (req, res) => {
    let postID = req.params.id;
    //i use MongoDB's deleteOne() functionality
    await Posts.deleteOne({_id: postID}, (err, data) => {
        if(err) {
            res.status(500).json({
                message: "Item not deleted",
            });
        } else {
            console.log("Item deleted");
            res.status(200).json({
                message: "Item deleted"
            });
        }
    });
};


