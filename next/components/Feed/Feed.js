import React from 'react';
import Card from '../Card/Card';
import styles from './Feed.module.css';
import Link from 'next/link';


function Feed({ posts }) {

  /* const URL_title = post.title.replace(regex, '-').toLowerCase(); */

  return (
   
    <div>
     
     { posts.slice(4, 8).map(post => (
        <Link href={`/post/${post._id}`} >
        <div className={styles.feed_card}>
          <Card key={post.id} post={post} />
        </div>
         </Link>
      ))}
     
    </div>
   
  );
}

export default Feed;
