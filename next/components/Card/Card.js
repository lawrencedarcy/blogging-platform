import React from 'react';
import styles from './Card.module.css';
import Moment from 'react-moment';

function Card({ post }) {
  const regex = /\s/g;
  console.log(post.tags)
  return (
  
    <div>
      
        <div className={styles.feed_card_inner}>
          <img
            src='https://uploads.guim.co.uk/2020/04/04/daniel-sessler-N98aPtXcDYs-unsplash.jpg'
            className={styles.card_img}
          ></img>
          <div className={styles.card_title}>{post.title}</div>

          {post.tags.length > 0 && (
            <div className={styles.card_tags}>
              {post.tags[0] && (
                <div className={styles.tag}>{'#' + post.tags[0]}</div>
              )}
              {post.tags[1] && (
                <div className={styles.tag}>
                  {post.tags[1] && '#' + post.tags[1]}
                </div>
              )}
              {post.tags[2] && (
                <div className={styles.tag}>
                  {post.tags[2] && '#' + post.tags[2]}
                </div>
              )}
            </div>
          )}

          <div className={styles.card_line}>
            <div className={styles.card_author}>{post.author} </div>
            <div className={styles.card_timestamp}>
              <div><Moment format="LL">{post.timestamp}</Moment></div>
            </div>
          </div>
        </div>
        <div className={styles.card_bottom}>
          <div className={styles.card_votes}>♡ {post.votes}</div>
          <div className={styles.card_btn}>Save</div>
        </div>
       
    </div>
    
  );
}

export default Card;
