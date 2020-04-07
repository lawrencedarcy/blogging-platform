const Post = require('./models');

const getPosts = async (req, res) => {
  console.log('get request received!'); // eslint-disable-line
  try {
    const posts = await Post.find();   
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addPost = async (req, res) => {
  
  console.log(req.body);// eslint-disable-line
  const post = new Post(
    {
      title: req.body.title,
      img_url: req.body.img,
      votes: 0, 
      author: req.body.author
    }
  );
  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  
};

const upVote = async (req, res) => {
  try {
    const upVoted = await Post.findOneAndUpdate({_id: req.params.id}, { $inc: { votes: 1}});
    res.status(200).json(upVoted); 
  } catch (err) {
    res.status(500).json({ message: err.message }); 
  }
};



module.exports = {
  getPosts,
  addPost,
  upVote
}; 


