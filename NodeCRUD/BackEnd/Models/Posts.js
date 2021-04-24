//imports to create a Schema/model
const mongoose = require("mongoose");
mongoose.Promise = global.Promise; // Tell mongoose to use ES6 promises

//create posts schema
const PostsSchema = new mongoose.Schema({
    id:{
        type: String,
        unique: true
    },
    artType: {
        type: String
    },
    article: {
        type: String
    },
    author: {
        type: String
    },
    price: {
        type: Number
    },
    onSale: {
        type: Boolean
    }
});

module.exports = mongoose.model('posts', PostsSchema);