const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;
const postSchema = new Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    photo: {type: String, default: "no photo"},
    likes: [{type: ObjectId, ref:"User"}],
    comments: [{ text: String, postedBy: [{type: ObjectId, ref: "User"}] }],
    postedBy: {type: ObjectId, ref: "user"}
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;