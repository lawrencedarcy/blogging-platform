import React from 'react';
import styles from './Card.module.css';
import Moment from 'react-moment';
import Link from 'next/link';
import { useAuth, withAuth  } from 'use-auth0-hooks';




function Card({ post, addToList, auth }) {
  const regex = /\s/g;
  const { login} = useAuth();
  const { user } = auth;
 


  const clickHandler = (e) => {
    console.log(post._id)
    user ? 
    addToList(user, post._id)
    :
    login();

  }

  return (
   
    <div className={styles.card_width}>
        
        <div className={styles.feed_card_inner}>
        <Link href={`/post/${post._id}`}  ><a>
          <img
            src={post.img_url}
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
          </a></Link>
        </div>
        <div className={styles.card_bottom}>
        
        <img className={styles.card_upvote} src="https://uploads.guim.co.uk/2020/04/15/culture.png"></img><div className={styles.card_votes}>{post.votes}</div>
        
       
          <div className={styles.card_btn} onClick={() => clickHandler()}>Save</div>
        </div>
      
    </div>
    
  );
}

export default withAuth(Card);
