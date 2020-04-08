const mongoose = require('./db');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  name: String
});

const postSchema = new Schema({
  
  title: String,
  body: String,
  tags: [tagSchema],
  img_url: String,
  timestamp: Number,
  votes: Number,
  author: String,
  url: String
});



const Post = mongoose.model('Post', postSchema);
module.exports = Post;