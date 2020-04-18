import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import styles from './Feed.module.css';
import FeedHeader from './FeedHeader';

function Feed({
  posts,
  feedState,
  addToList,
  deleteFromList,
  checkReadingList
}) {

 const [method, setMethod] = useState('popular');

  const sortBy = (posts, method) => {
    let sortedList = [];
    if (method === 'popular') {
      sortedList = posts.sort(function(a, b) {
        a = a.votes;
        b = b.votes;
        return a > b ? -1 : a < b ? 1 : 0;
      });
    }

    if (method === 'latest') {
        sortedList = posts.sort(function(a, b) {
        a = a.timestamp;
        b = b.timestamp;
        
        return a > b ? -1 : a < b ? 1 : 0;
      });
    }

    if (method === 'feed') {
      sortedList = posts.sort(function(a, b) {
      a = a.timestamp/100000000  + (a.votes/10);
      b = b.timestamp/100000000 + (b.votes/10) ;
      console.log(a, b);
      return a > b ? -1 : a < b ? 1 : 0;
    });
  }
    return sortedList;
  };

  const methodHandler = (m) => {setMethod(m)} 


  return (
    <div className={styles.feed_body}>
      {feedState === 'tags' && <FeedHeader filter={'tags'} />}
      {feedState === 'search' && <FeedHeader filter={'search'} />}
      {feedState === 'list' && <FeedHeader filter={'list'} />}
      {feedState === 'normal' && (
        <FeedHeader filter={'normal'} methodHandler={methodHandler} />
      )}

      { sortBy(posts, method).map((post, i) => (
        <div className={styles.feed_card} key={post._id}>
          <Card
            id={i}
            post={post}
            addToList={addToList}
            feedState={feedState}
            deleteFromList={deleteFromList}
            checkReadingList={checkReadingList}
          />
        </div>
      ))}
    </div>
  );
}

export default Feed;
