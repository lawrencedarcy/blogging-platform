import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import styles from './Feed.module.css';
import FeedHeader from './FeedHeader';
import InfiniteScroll from 'react-infinite-scroller';

function Feed({
  posts,
  feedState,
  addToList,
  deleteFromList,
  checkReadingList,
  getPosts
}) {

 const [postsToShow, setPostsToShow] = useState(5)
 const [method, setMethod] = useState('feed');

 const loadFunc = () => {
  setPostsToShow((postsToShow => postsToShow+3));
 }

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
      a = a.timestamp/100000000  + (a.votes/3);
      b = b.timestamp/100000000 + (b.votes/3) ;
      return a > b ? -1 : a < b ? 1 : 0;
    });
  }
    return sortedList;
  };

  const methodHandler = (m) => {setMethod(m)} 


  return (
    <div className={styles.feed_body} >
      {feedState === 'tags' && <FeedHeader filter={'tags'} />}
      {feedState === 'search' && <FeedHeader filter={'search'} posts={posts} />}
      {feedState === 'list' && <FeedHeader filter={'list'} />}
      {feedState === 'normal' && (
        <FeedHeader filter={'normal'} methodHandler={methodHandler} getPosts={getPosts}/>
      )}

<InfiniteScroll
    pageStart={0}
    loadMore={loadFunc}
    hasMore={postsToShow < posts.length}
    loader={<div className="loader" key={0}>Loading ...</div>}
>

   { sortBy(posts, method).slice(0, postsToShow).map((post, i) => (
        <div className={styles.feed_card} key={post._id} >
          <Card
            id={i}
            post={post}
            addToList={addToList}
            feedState={feedState}
            deleteFromList={deleteFromList}
            checkReadingList={checkReadingList}
            getPosts={getPosts}
          />
        </div>
      ))}


</InfiniteScroll>

    
    </div>
  );
}

export default Feed;
