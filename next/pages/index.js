import React from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar/NavBar';
import Dashboard from '../components/Dashboard/Dashboard';
import Create from './write';
import Post from './post';


function App({ posts }) {
  const findPost = url => {
    const res = posts.filter(
      post => post.title && post.title.replace(/\s/g, '-').toLowerCase() === url
    );
    console.log('foundpost', res[0]);
    return res[0];
  };



  return (
    <div className="app_body">
     
      <Dashboard posts={posts}  />
    </div>
  );
}

App.getInitialProps = async ctx => {
  const res = await axios.get('http://localhost:3001/posts');
  return { posts: res.data };
};

export default App;
