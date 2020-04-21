import React, { useState, useEffect } from 'react';
import styles from './Sidebar.module.css';
import { useRouter } from 'next/router';
import { useAuth, withAuth } from 'use-auth0-hooks';
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';

function Sidebar({ tags, getPostByTag, auth, searchPosts, getReadingList }) {
  const { pathname, query } = useRouter();
  const { isLoading, login, logout } = useAuth();
  const { user } = auth;
  const [ localUser, setLocalUser ] = useState();

  useEffect(() => {
    getLocalUser();
  }, []);

  const getLocalUser = async () => {
    user && await axios.get(`https://stagetimeblog.herokuapp.com/users/${user.nickname}`)
    .then(res => {
      setLocalUser(res.data[0]);
      console.log(res.data);
    });
  };



  // handle tags - create a unique list to display
  const tagsList = new Set();
  tags.map(arr => arr.map(tag => tagsList.add(tag.toLowerCase())));
  const tagsArr = Array.from(tagsList);

  //handle search state
  const [term, setTerm] = useState();

  const clickHandler = evt => {
    getPostByTag(evt.target.value);
  };
  const readingClickHandler = evt => {
    getReadingList(user);
  };

  const searchSubmit = e => {
    event.stopPropagation();
    e.preventDefault();
    searchPosts(term);
    setTerm('');
  };
  const handleChange = e => {
    setTerm(e.target.value);
  };

  return (
    <div className={styles.sidebar}>
      {isLoading ? (
        <div>
          <Skeleton count={11} />
        </div>
      ) : user ? (
        <div className={styles.sidebar_profile}>
          <img className={styles.sidebar_img} src={localUser && localUser.image || user.picture} />
          <div className={styles.sidebar_name}>
            {' '}
            {user.nickname || user.name}
          </div>
          <div className={styles.sidebar_reading} onClick={readingClickHandler}>
            📚 Reading list
          </div>
          <a className={styles.sidebar_edit_profile} href='https://stagetime.now.sh/editbio'>
            👤 Edit your profile
          </a>

          <button
            className={styles.sidebar_login}
            onClick={() => logout({ returnTo: 'https://stagetime.now.sh' })}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className={styles.sidebar_profile}>
          <div className={styles.sidebar_tagline}>
            Stagetime is a community of comedians.
          </div>
          <div className={styles.sidebar_text}>
            {' '}
            Sign in below to write a post and join the discussion.
          </div>
          <div
            className={styles.sidebar_login}
            onClick={() =>{
              login({ appState: { returnTo: { pathname, query } } }  );
              }
            }
          >
            Sign in
          </div>
        </div>
      )}

      <form className={styles.sidebar_search} onSubmit={searchSubmit}>
        <input
          className={styles.sidebar_search_input}
          type='text'
          placeholder='Search posts...'
          onChange={handleChange}
          value={term}
          id='searchPosts'
        ></input>
      </form>
      <div className={styles.sidebar_title}>Filter feed by tag</div>
      <div className={styles.sidebar_tags}>
        {tagsArr.map(tag => (
          <button
            className={styles.sidebar_tag}
            key={tag}
            value={tag}
            onClick={clickHandler}
          >{`#${tag.toLowerCase()}`}</button>
        ))}
      </div>
    </div>
  );
}

export default withAuth(Sidebar);
