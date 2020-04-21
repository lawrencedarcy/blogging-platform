const { Post, User } = require('./models');

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getTags = async (req, res) => {
  try {
    const tags = await Post.find({}, 'tags');

    res.json(tags.map(tag => tag.tags));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPostsByTag = async (req, res) => {
  try {
    const posts = await Post.find({ tags: { $in: req.params.tag } });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const searchPosts = async (req, res) => {
  try {
    const posts = await Post.find({
      $text: {
        $search: req.params.term,
        $language: 'en',
        $caseSensitive: false
      }
    });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addPost = async (req, res) => {
  req.body.p.tags = req.body.p.tags.replace(/\s/g, '').split(',');
  const post = new Post({
    title: req.body.p.headline,
    body: req.body.p.body,
    tags: req.body.p.tags,
    img_url: req.body.p.image,
    votes: 0,
    timestamp: Date.now(),
    author: req.body.p.author || 'No author'
  });
  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const upVote = async (req, res) => {
  try {
    const upVoted = await Post.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { votes: 1 } },
      { new: true }
    );
    res.status(200).json(upVoted);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const foundPost = await Post.findOne({ _id: req.params.id });
    res.status(200).json(foundPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addUser = async (req, res) => {
  console.log(req.body);
  const user = new User({
    name: req.body.name,
    image: req.body.image
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getReading = async (req, res) => {
  try {
     await User.find({ name: req.params.name })
    .then( async(result) => {
      const list = result[0].reading;
      const readingPosts = await getRList(list);
      console.log('hi from get readings');
      res.json(readingPosts);
    })
   
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getRList = async(list) => {
    const posts = await Post.find({ _id: { $in: list } });
    return posts;
};



const getUser = async (req, res) => {
  try {
    const user = await User.find({ name: req.params.name });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const editUser = async (req, res) => {
  try {
    const edited = await User.findOneAndUpdate(
      { name: req.params.name },
      {
        $push: { reading: req.body.reading }
      },
      { new: true }
    );
    res.status(200).json(edited);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const editBio = async (req, res) => {
  const params = {
    bio: req.body.bio,
    location: req.body.location,
    image: req.body.image,
    website: req.body.website
  }

  for (let prop in params){if (!params[prop]) delete params[prop]};

  try {
    const edited = await User.findOneAndUpdate(
      { name: req.params.name },
      params,
      { new: true }
    );
    res.status(200).json(edited);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getList = async (req, res) => {
  const arrayOfIds = req.query.list;
  try {
    const posts = await Post.find({ _id: { $in: arrayOfIds } });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteFromList = async (req, res) => {
  try {
    const edited = await User.findOneAndUpdate(
      { name: req.params.name },
      {
        $pull: { reading: req.body.reading }
      },
      { new: true }
    );
    res.status(200).json(edited);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  searchPosts,
  getPosts,
  getTags,
  getPostsByTag,
  addPost,
  upVote,
  getPostById,
  addUser,
  getUser,
  editUser,
  getList,
  deleteFromList,
  editBio,
  getReading
};
