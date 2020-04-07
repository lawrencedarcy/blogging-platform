const mongoose = require('./db');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  
  title: String,
  img_url: String,
  timestamp: Date.now(),
  votes: Number,
  author: String

  
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;