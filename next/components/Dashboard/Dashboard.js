import React from 'react';
import Feed from '../Feed/Feed';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Dashboard.module.css';

function Dashboard({ posts, upVote }) {
  return (
    <div className={styles.body_wrapper}>
      <Feed posts={posts} upVote={upVote} />
      <Sidebar />
    </div>
  );
}

export default Dashboard;
