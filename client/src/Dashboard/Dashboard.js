import React, {useEffect, useState} from 'react';
import Feed from '../Feed/Feed';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';
import axios from 'axios';


function Dashboard() {

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

 


  return (
    <div className="body-wrapper">
      <Feed posts={posts} />
      <Sidebar />
      
    </div>
  );
}

export default Dashboard;