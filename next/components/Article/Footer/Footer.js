import React from 'react';
import styles from './Footer.module.css';
function Footer({upVote, post}) {

  const clickHandler = () => {
  
    upVote(post._id);
  }
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer}>
        <div className={styles.footer_upvote} onClick={clickHandler}>  <img className={styles.footer_logo} src="https://uploads.guim.co.uk/2020/04/15/output-onlinepngtools.png"></img>
</div>
        <div className={styles.footer_share}>share</div>
        <div className={styles.footer_share}>discuss</div>
        </div>
    </div>
  );
}

export default Footer;