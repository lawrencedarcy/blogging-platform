import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Dashboard from '../components/Dashboard/Dashboard';


function App({ postList, tags, auth }) {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    setPosts(postList);
  }, []);

  const getPostByTag = async(tag) => {
    await axios.get(`http://localhost:3001/posts/${tag}`)
    .then((data) => setPosts(data.data))
  }

  const searchPosts = async(term) => {
    await axios.get(`http://localhost:3001/posts/search/${term}`)
    .then((data) => setPosts(data.data))
  }



  return (
    <div className="app_body">
     
      <Dashboard posts={posts} tags={tags} getPostByTag={getPostByTag} searchPosts={searchPosts}/>
    </div>
  );
}

App.getInitialProps = async ctx => {
  const res = await axios.get('http://localhost:3001/posts');
  const tags = await axios.get('http://localhost:3001/tags');
  return { postList: res.data, tags: tags.data };
};

export default App;
