import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar/NavBar';
import Dashboard from '../components/Dashboard/Dashboard';
import Create from './write';
import Post from './post';


function App({ postList, tags }) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postList);
  }, []);

  const findPost = url => {
    const res = posts.filter(
      post => post.title && post.title.replace(/\s/g, '-').toLowerCase() === url
    );
    console.log('foundpost', res[0]);
    return res[0];
  };

  const getPostByTag = async(tag) => {
    const res = await axios.get(`http://localhost:3001/posts/${tag}`)
    .then((data) => setPosts(data.data))
  }



  return (
    <div className="app_body">
     
      <Dashboard posts={posts} tags={tags} getPostByTag={getPostByTag}/>
    </div>
  );
}

App.getInitialProps = async ctx => {
  const res = await axios.get('http://localhost:3001/posts');
  const tags = await axios.get('http://localhost:3001/tags');
  return { postList: res.data, tags: tags.data };
};

export default App;
