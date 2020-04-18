import React, {useState} from 'react';
import styles from './Feed.module.css';


function FeedHeader({ filter, methodHandler }) {

  const [selected, setSelected] = useState('popular'); 
  const clickHandler = (string) => {
    methodHandler(string);
    setSelected(string);
  }

  return (
    <div className={styles.feed_header}>
      {filter === 'normal' && (
        <div className={styles.header_btn_container}>
          <div className={selected == 'popular' ? styles.header_btn_selected : styles.header_btn} onClick={() => clickHandler('popular')}> Popular</div>
          <div className={selected == 'latest' ? styles.header_btn_selected : styles.header_btn} onClick={() => clickHandler('latest')}> Latest</div>
          
        </div>
      )}

      {filter === 'list' && (
        <div>
          These are your saved articles.{' '}
          <span className={styles.link}>
            <a href='/'>Go back to the feed.</a>
          </span>
        </div>
      )}

      {filter === 'tags' && (
        <div>
          Feed filtered by tag.{' '}
          <span className={styles.link}>
            <a href='/'>Refresh the feed.</a>{' '}
          </span>
        </div>
      )}
      {filter === 'search' && (
        <div>
          Your search results.{' '}
          <span className={styles.link}>
            <a href='/'>Refresh the feed.</a>
          </span>
        </div>
      )}
    </div>
  );
}

export default FeedHeader;
