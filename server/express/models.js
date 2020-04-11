const mongoose = require('./db');
const Schema = mongoose.Schema;


const postSchema = new Schema({
  
  title: String,
  body: String,
  tags: [String],
  img_url: String,
  timestamp: Number,
  votes: Number,
  author: String,
  url: String
});


const Post = mongoose.model('Post', postSchema);
module.exports = {Post};