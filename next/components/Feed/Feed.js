import React, {useState} from 'react';
import Card from '../Card/Card';
import styles from './Feed.module.css';
import FeedHeader from './FeedHeader';



function Feed({ posts, feedState, addToList, deleteFromList, checkReadingList }) {
  
  const sortedList = posts.sort(function(a, b) {
    a = a.votes;
    b = b.votes;
    return a > b ? -1 : a < b ? 1 : 0;
  });

  return (
    <div className={styles.feed_body}>
      {feedState === 'tags' && <FeedHeader filter={'tags'} />}
      {feedState === 'search' && <FeedHeader filter={'search'} />}
      {feedState === 'list' && <FeedHeader filter={'list'} />}

      {sortedList.map(post => (
        <div className={styles.feed_card} key={post._id}>
          <Card
            
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
