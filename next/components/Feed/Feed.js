import React from 'react';
import Card from '../Card/Card';
import styles from './Feed.module.css';
import Link from 'next/link';
import FeedHeader from './FeedHeader';

function Feed({posts, feedState}) {

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
     { sortedList.map(post => (
        <Link href={`/post/${post._id}`}  >
        <div className={styles.feed_card}>
          <Card key={post.id} post={post} />
        </div>
         </Link>
      ))}
     
    </div>
   
  );
}

export default Feed;
