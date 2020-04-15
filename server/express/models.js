const mongoose = require('./db');
const Schema = mongoose.Schema;


const postSchema = new Schema({
  
  title: { type: String, text: true },
  body: { type: String, text: true },
  tags: { type: [String], text: true },
  img_url: String,
  timestamp: Number,
  votes: Number,
  author: { type: String, text: true },
  url: String
});


const Post = mongoose.model('Post', postSchema);
module.exports = {Post};