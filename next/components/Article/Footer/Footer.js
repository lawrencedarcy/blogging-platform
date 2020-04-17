import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';

function Footer({ upVote, post }) {
  const [vote, setVote] = useState(false);

  useEffect(() => {
    const getVote = localStorage.getItem(post._id);
    setVote(getVote);
  }, []);

  const clickHandler = () => {
   
    upVote(post._id);
    setVote(true);
    localStorage.setItem(post._id, true);
  };
  return (
   
    <div className={styles.footer_wrapper}>
      <div className={styles.footer}>
        <div
          className={vote ? styles.footer_upvote_clicked : styles.footer_upvote}
          onClick={vote ? null : clickHandler}
        >
          {' '}
          <img
            className={styles.footer_logo}
            src='https://uploads.guim.co.uk/2020/04/15/output-onlinepngtools.png'
          ></img>
          <div className={styles.footer_votes}>
            {vote ? post.votes + 1 : post.votes}
          </div>
        </div>
    {/*     
        <div className={styles.footer_share}>
        <img
            className={styles.footer_logo}
            src='https://uploads.guim.co.uk/2020/04/16/twitter_PNG15.png'
          ></img>
        <a class="twitter-share-button" href={`https://twitter.com/intent/tweet?text=${post.title} http://localhost:3000/`}  data-size="large" data-text={post.title} data-hashtags={post.tags[0] && post.tags[0], post.tags[1] && post.tags[1], post.tags[2] && post.tags[2]   } data-show-count="false"><div className={styles.tweet_link}>Tweet</div></a>
        </div> */}


        <div className={styles.footer_discuss}>
        <a href="#disqus" className={styles.tweet_link}> <img
            className={styles.footer_logo}
            src='https://s3-eu-west-1.amazonaws.com/uploads-origin.guim.co.uk/2020/04/16/output-onlinepngtools_(1).png'
          ></img></a>
          <a href="#disqus" className={styles.tweet_link}>Discuss</a></div>
      </div>
    </div>
   
  );
}

export default Footer;
