import React from 'react';
import Card from '../Card/Card';
import styles from './Feed.module.css';
import FeedHeader from './FeedHeader';
import Link from 'next/link';
function Feed({posts, feedState, addToList, deleteFromList }) {

  console.log(posts);
  /* const URL_title = post.title.replace(regex, '-').toLowerCase(); */
  const sortedList = posts.sort(function(a, b) {
    a = a.votes;
    b = b.votes;
    return a > b ? -1 : a < b ? 1 : 0;
});
  return (
   
    <div>
     {feedState === 'tags' && <FeedHeader filter={'tags'} />}
     {feedState === 'search' && <FeedHeader filter={'search'} />}
     {feedState === 'list' && <FeedHeader filter={'list'} />}
     { sortedList.map(post => (
       
        <div className={styles.feed_card}>
           
          <Card key={post.id} post={post} addToList={addToList} feedState={feedState} deleteFromList={deleteFromList}/>
         
        </div>
         
      ))}
     
    </div>
  
  );
}

export default Feed;