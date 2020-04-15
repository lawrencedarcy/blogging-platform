import React from 'react';
import Feed from '../Feed/Feed';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Dashboard.module.css';

function Dashboard({ posts, upVote, tags, getPostByTag, searchPosts }) {
  return (
    <div className={styles.body_wrapper}>
    
      <Sidebar tags={tags} getPostByTag={getPostByTag} searchPosts={searchPosts}/>
      <Feed posts={posts} upVote={upVote}  />
      
    </div>
  );
}

export default Dashboard;
