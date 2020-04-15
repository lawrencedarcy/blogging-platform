import React, {useState} from 'react';
import styles from './Footer.module.css';
function Footer({upVote, post}) {

  const [vote, setVote] = useState(false);

  const clickHandler = () => {
  
    upVote(post._id);
    setVote(true);
  }
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer}>
      
        <div className={vote ? styles.footer_upvote_clicked : styles.footer_upvote} onClick={vote ? null : clickHandler}>  <img className={styles.footer_logo} src="https://uploads.guim.co.uk/2020/04/15/output-onlinepngtools.png"></img>
          <div className={styles.footer_votes}>{vote ? post.votes+1 : post.votes}</div>
  </div>
  
        <div className={styles.footer_share}>share</div>
        <div className={styles.footer_share}>discuss</div>
        </div>
    </div>
  );
}

export default Footer;