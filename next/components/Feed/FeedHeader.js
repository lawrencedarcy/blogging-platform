import React from 'react';
import styles from './Feed.module.css';
import Link from 'next/link';
import Router from 'next/router'


function FeedHeader({filter}) {
  return (
    <div className={styles.feed_header}>
      {filter == 'tags' ?  
    <div>Feed filtered by tag. <span className={styles.link}><a href="/">Refresh the feed.</a> </span></div>
    :    
    <div>Your search results. <span className={styles.link}><a href="/">Refresh the feed.</a></span></div>
    }
      
    </div>
  );
}

export default FeedHeader;