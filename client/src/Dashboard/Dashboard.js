import React, {useEffect, useState} from 'react';
import Feed from '../Feed/Feed';
import Sidebar from '../Sidebar/Sidebar'
import './Dashboard.css';

function Dashboard(props) {
  return (
    <div className="body-wrapper">
      <Feed />
      <Sidebar />
      
    </div>
  );
}

export default Dashboard;