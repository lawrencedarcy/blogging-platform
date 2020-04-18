import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';
import Moment from 'react-moment';
import Link from 'next/link';
import { useAuth, withAuth } from 'use-auth0-hooks';

function Card({
  post,
  id,
  addToList,
  auth,
  feedState,
  deleteFromList,
  checkReadingList
}) {
  const { login, isLoading } = useAuth();
  const { user } = auth;
  const [onList, setOnList] = useState(false);


  useEffect(() => {
   if (user) {
    checkReadingList(user, post._id)
    .then((isOnList) => setOnList(isOnList));
   } 
  }, [user]); 

  const clickHandler = e => {
    user ? addToList(user, post._id) : login();
    setOnList(true);
  };

  return (
    <div className={styles.card_width}>
      <div className={styles.feed_card_inner}>
        <Link href={`/post/${post._id}`}>
          <div className={styles.card_link_block}>
           {post.img_url && id == 0 && <img src={post.img_url} className={styles.card_img} alt={post.title}></img>}
            <div className={styles.card_title}>{post.title}</div>

            {post.tags.length > 0 && (
              <div className={styles.card_tags}>
                {post.tags.slice(0, 3).map(tag => (
                  <div className={styles.tag} key={tag}>{'#' + tag}</div>
                ))}
              </div>
            )}

            <div className={styles.card_line}>
              <div className={styles.card_author}>{post.author} </div>
              <div className={styles.card_timestamp}>
                <div>
                  <Moment format='LL'>{post.timestamp}</Moment>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.card_bottom}>
        <Link href={`/post/${post._id}`}>
          <div className={styles.votes_bottom}>
            <img
              alt="upvote"
              className={styles.card_upvote}
              src='https://uploads.guim.co.uk/2020/04/15/culture.png'
            ></img>
            <div className={styles.card_votes}>{post.votes}</div>
          </div>
        </Link>

        {feedState === 'list' ? (
          <div
            className={styles.card_btn}
            onClick={() => deleteFromList(user, post._id)}
          >
            📚 Remove
          </div>
        ) : !isLoading &&
        (
          <div
            className={onList ? styles.card_btn_clicked : styles.card_btn}
            onClick={() => clickHandler()}
          >
            { onList  ? '📚 Saved' : '📚 Save' }
          </div>
        )}
      </div>
    </div>
  );
}

export default withAuth(Card);
