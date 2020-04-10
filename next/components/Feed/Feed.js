import React from 'react';
import Card from '../Card/Card';
import styles from './Feed.module.css';
import Link from 'next/link';


function Feed({ posts }) {

  console.log(posts);
  /* const URL_title = post.title.replace(regex, '-').toLowerCase(); */
  const sortedList = posts.sort(function(a, b) {
    a = a.votes;
    b = b.votes;
    return a > b ? -1 : a < b ? 1 : 0;
});
  return (
   
    <div>
     
     { sortedList.slice(0, 8).map(post => (
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
