import React, {useEffect, useState} from 'react';
import axios from 'axios';
import NavBar from './NavBar/NavBar';
import Dashboard from './Dashboard/Dashboard';
import Create from './Create/Create';
import { Route, Switch } from 'react-router-dom';
import Article from './Article/Article'
import './App.css';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/posts')
    .then(function (res) {
      console.log(res.data);
      setPosts(res.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, []);

  const findPost = (url) => {
    const res = posts.filter(post => post.title && post.title.replace(/\s/g, '-').toLowerCase() === url);
    console.log('foundpost', res[0])
    return res[0];
  }

  const upVote = (id) => {
    
    axios.put(`http://localhost:3001/posts/${id}/up`)
    .then(function (res) {
      console.log(res.data);
     
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  return (
    <div className="app-body">
      <NavBar />      
      <Switch>
      <Route path="/" render={() => <Dashboard posts={posts}/>} exact />
      <Route path="/write" component={Create} />
      <Route path="/article/:headline" render={props => <Article props={props} upVote={upVote} post={findPost(props.match.params.headline)}/> } />

      </Switch>
    </div>
  );
}

export default App;
