import React from 'react';
import Feed from '../Feed/Feed';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Dashboard.module.css';

function Dashboard({
  posts,
  upVote,
  tags,
  getPostByTag,
  searchPosts,
  feedState,
  addToList,
  getReadingList,
  deleteFromList,
  checkReadingList,

}) {
  return (
    <div className={styles.body_wrapper}>
      <Sidebar
        tags={tags}
        getPostByTag={getPostByTag}
        searchPosts={searchPosts}
        getReadingList={getReadingList}
      />

      <Feed
        posts={posts}
        upVote={upVote}
        feedState={feedState}
        addToList={addToList}
        deleteFromList={deleteFromList}
        checkReadingList={checkReadingList}   
      />
    </div>
  );
}

export default Dashboard;
