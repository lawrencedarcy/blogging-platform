const {Post}= require('./models');

const getPosts = async (req, res) => {
 
  try {
    const posts = await Post.find();   
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getTags = async (req, res) => {
  console.log('tag request received!'); // eslint-disable-line
  try {
    const tags = await Post.find({}, 'tags');   
  
    res.json(tags.map(tag => tag.tags ));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPostsByTag = async (req, res) => {
 
  try {
    const posts = await Post.find({tags: {$in: req.params.tag}});   
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addPost = async (req, res) => { 
  req.body.p.tags = req.body.p.tags.replace(/\s/g, '').split(",");
  console.log('req body', req.body);// eslint-disable-line
  const post = new Post(
    {
      title: req.body.p.headline,
      body: req.body.p.body,
      tags: req.body.p.tags,
      img_url: req.body.p.img,
      votes: 0, 
      timestamp: Date.now(),
      author: req.body.p.author || 'No author'
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

const getPostById = async (req, res) => {
  try {
    const foundPost = await Post.findOne({_id: req.params.id});
    res.status(200).json(foundPost); 
  } catch (err) {
    res.status(500).json({ message: err.message }); 
  }
};

const getPostByUrl = () => {
  
  
}




module.exports = {
  getPosts,
  getTags,
  getPostsByTag,
  addPost,
  upVote,
  getPostById
}; 


