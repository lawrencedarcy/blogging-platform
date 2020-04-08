import React from 'react';
import Feed from '../Feed/Feed';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';



function Dashboard({posts}) {

  return (
    <div className="body-wrapper">
      <Feed posts={posts} />
      <Sidebar />
      
    </div>
  );
}

export default Dashboard;