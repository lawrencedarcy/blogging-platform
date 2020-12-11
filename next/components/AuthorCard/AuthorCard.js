import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './AuthorCard.module.css';
function AuthorCard({ author }) {
  const [authorBio, setAuthorBio] = useState();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    await axios.get(`https://stbackend.herokuapp.com/posts/users/${author}`).then(res => {
      setAuthorBio(res.data[0]);
    });
  };

  return (
    authorBio ?
    <div id="authorCard" className={styles.author_card}>
      <div className={styles.card_image}>
        {authorBio && (
          <img
            className={styles.author_image}
            src={authorBio.image.length > 8 && authorBio.image}
          ></img>
        )}
      </div>

      {authorBio && (
        <div className={styles.card_info}>
          <div className={styles.author_name}>{authorBio.name}</div>
          <div className={styles.author_location}> {authorBio.location}</div>
          <div className={styles.author_bio}> {authorBio.bio}</div>
          <a
            className={styles.author_website}
            href={`https://${authorBio.website}`}
          >
            {' '}
            {authorBio && authorBio.website}
          </a>
        </div>
      )}
    </div>
    :
    null
  );
}

export default AuthorCard;
