import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Dashboard from '../components/Dashboard/Dashboard';
import { deflateRawSync } from 'zlib';


function App({ postList, tags, auth }) {

  const [posts, setPosts] = useState([]);
  const [feed, setFeed] = useState('normal');

  useEffect(() => {
    setPosts(postList);
    setFeed('normal');
  }, []);

  const getPostByTag = async(tag) => {
    await axios.get(`http://localhost:3001/posts/${tag}`)
    .then(
      (data) => {
        setPosts(data.data);
        setFeed('tags');
      } 
      )
  }

  const searchPosts = async(term) => {
    await axios.get(`http://localhost:3001/posts/search/${term}`)
    .then((data) => {
      setPosts(data.data)
      setFeed('search');
    })
  }

  const addToList = async(user, post) => {
    console.log(user.nickname, post);
    await axios.get(`http://localhost:3001/users/${user.nickname}`)
    .then((res) => {
      if(res.data[0]){
        axios.put(`http://localhost:3001/users/${user.nickname}`, {reading: post})
      }
      else{
        console.log('hi from create');
       createUser(user.nickname, post)
      }
    })
  }

  const createUser = async(name, post) => {
    await axios.post(`http://localhost:3001/users`, {name: name, reading: post})
  }

  const getReadingList = async(user) => {
  
    await axios.get(`http://localhost:3001/users/${user.nickname}`)
    .then((res) => {
      const list = res.data[0].reading;
      listHelper(list);
    })

  }

  const listHelper = async(list) => {
    await axios.get(`http://localhost:3001/list`, { params: {list: list}})
    .then((res) => {
      setPosts(res.data);
      setFeed('list');
    });
  }


  return (
    <div className="app_body">
     
      <Dashboard posts={posts} 
                  tags={tags} 
                  getPostByTag={getPostByTag} 
                  addToList={addToList}
                  searchPosts={searchPosts}
                  feedState={feed}
                  getReadingList={getReadingList}
                  />
    </div>
  );
}

App.getInitialProps = async ctx => {
  const res = await axios.get('http://localhost:3001/posts');
  const tags = await axios.get('http://localhost:3001/tags');
  return { postList: res.data, tags: tags.data };
};

export default App;
