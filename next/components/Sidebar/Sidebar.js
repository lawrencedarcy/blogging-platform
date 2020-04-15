import React from 'react';
import styles from './Sidebar.module.css';
import { useRouter } from 'next/router';

import { useAuth0, withAuth } from 'use-auth0-hooks';
import Link from 'next/link';




function Sidebar({tags, getPostByTag, auth}) {
  const { pathname, query } = useRouter();
 // const { isAuthenticated, isLoading, login, logout } = useAuth0();
  const { user } = auth;
  console.log('user', user);

  const tagsList = new Set;
  tags.map(arr => arr.map(tag => tagsList.add(tag)));
  const tagsArr = Array.from(tagsList);

  const clickHandler = (evt) => {
  
    getPostByTag(evt.target.value);
  }

  return (
    <div className={styles.sidebar}>
    
      {user ? 
      <div className={styles.sidebar_profile}>
      <img className={styles.sidebar_img} src={user.picture} />
        <div className={styles.sidebar_name}> {user.name}</div>
      <button onClick={() => logout({ returnTo: 'http://localhost:3000' })}>Logout</button>
     
      </div>
      : 
      <div className={styles.sidebar_profile}>
      <div className={styles.sidebar_tagline}>Stagetime is a community of comedians.</div><div className={styles.sidebar_text}> Sign in below to write a post and join the discussion.</div>
        <div className={styles.sidebar_login}><Link href="/write"><a>Login</a></Link></div>
      </div>
      }
      <div className={styles.sidebar_search}></div>
      <div className={styles.sidebar_title}>Filter feed by tag</div>
      <div className={styles.sidebar_tags}>
      
    {tagsArr.map(tag => <button className={styles.sidebar_tag} value={tag} onClick={clickHandler}>{`#${tag.toLowerCase()}`}</button>)}
        
      </div>
    </div>
  );
}

export default withAuth(Sidebar);