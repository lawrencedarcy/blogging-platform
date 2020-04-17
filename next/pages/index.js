import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Dashboard from '../components/Dashboard/Dashboard';


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
        axios.put(`http://localhost:3001/users/${user.nickname}`, {reading: post});
      }
      else{
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
 //part of get reading list and delete from list
  const listHelper = async(list) => {
    await axios.get(`http://localhost:3001/list`, { params: {list: list}})
    .then((res) => {
      setPosts(res.data);
      setFeed('list');
    });
  }

  const deleteFromList = async(user, postid) => {
   await axios.put(`http://localhost:3001/list/${user.nickname}`, {reading: postid})
   .then(res =>  {
     const list = res.data.reading;
    listHelper(list); 
   });
  }

  const checkReadingList = async(user, postId) => {
    return axios.get(`http://localhost:3001/users/${user.nickname}`)
    .then((res) => {
      const list = res.data[0].reading;
      console.log('checked the list!', list.includes(postId) ? true : false);
      return list.includes(postId) ? true : false;
    })
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
                  deleteFromList={deleteFromList}
                  checkReadingList={checkReadingList}
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
