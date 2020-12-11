import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from '../components/Dashboard/Dashboard';
import { useAuth, withAuth } from 'use-auth0-hooks';

function App({ postList, tags, auth}) {
  const [posts, setPosts] = useState([]);
  const [feed, setFeed] = useState('normal');
  const { user } = auth;

  useEffect(() => {
    setPosts(postList);
    setFeed('normal');
  }, []);


  const getPostByTag = async tag => {
    await axios.get(`https://stbackend.herokuapp.com/posts/${tag}`).then(data => {
      setPosts(data.data);
      setFeed('tags');
    });
  };

  const searchPosts = async term => {
    await axios.get(`https://stbackend.herokuapp.com/posts/search/${term}`).then(data => {
      setPosts(data.data);
      setFeed('search');
    });
  };

  const addToList = async (user, postId) => {
    await axios
      .get(`https://stbackend.herokuapp.com/users/${user.nickname}`)
      .then(
        res => { if(!res.data[0]) {
          createUser(user.nickname);
          return res;
        }}
      )
      .then(res => {
          axios.put(`https://stbackend.herokuapp.com/users/${user.nickname}`, {
            reading: postId
          });
      });
  };

  const createUser = async (name) => {
    await axios.post(`https://stbackend.herokuapp.com/users`, {
      name: name,
      image: user.picture
    });
  };


  const getReadingList = async user => {
    await axios
      .get(`https://stbackend.herokuapp.com/reading/${user.nickname}`)
      .then(res => {
        console.log('data', res);
        if (res.data[0]) {
          setPosts(res.data);
          setFeed('list');
        } else {
          console.log('was no data')
          const list = [];
          setPosts(list);
          setFeed('list');
        }
      });
  };

  const deleteFromList = async (user, postid) => {
    axios
      .put(`https://stbackend.herokuapp.com/list/${user.nickname}`, { reading: postid });
      setPosts(currentPosts => currentPosts.filter(post => post._id !== postid));
  };

  const checkReadingList = async (user, postId) => {
    return axios
      .get(`https://stbackend.herokuapp.com/users/${user.nickname}`)
      .then(res => {
        if (res.data[0]) {
          const list = res.data[0].reading;
          return list.includes(postId) ? true : false;
        }
      });
  };


  return (
    <div className='app_body'>
      <Dashboard
        posts={posts}
        tags={tags}
        getPostByTag={getPostByTag}
        addToList={addToList}
        searchPosts={searchPosts}
        feedState={feed}
        getReadingList={getReadingList}
        deleteFromList={deleteFromList}
        checkReadingList={checkReadingList}
      />
    </div>
  );
}

App.getInitialProps = async ctx => {
  const res = await axios.get('https://stbackend.herokuapp.com/posts');
  const tags = await axios.get('https://stbackend.herokuapp.com/tags');
  return { postList: res.data, tags: tags.data };
};

export default withAuth(App);
