import React from 'react';
import styles from './Sidebar.module.css';
import { withAuth } from 'use-auth0-hooks';

function Sidebar({tags, getPostByTag, auth}) {
  const { user } = auth;
  console.log('user', user);
  const tagsList = new Set;
  tags.map(arr => arr.map(tag => tagsList.add(tag)));
  const tagsArr = Array.from(tagsList);

  const clickHandler = (evt) => {
    console.log('clickhandler says', evt.target.value)
    getPostByTag(evt.target.value);
  }

  return (
    <div className={styles.sidebar}>
    
      {user && <div className={styles.sidebar_profile}>
      <img className={styles.sidebar_img} src={user.picture} />
        <div className={styles.sidebar_name}> {user.name}</div>
      
      
      </div>}
      <div className={styles.sidebar_search}></div>
      <div className={styles.sidebar_title}>Filter by tag</div>
      <div className={styles.sidebar_tags}>
    {tagsArr.map(tag => <button className={styles.sidebar_tag} value={tag} onClick={clickHandler}>{`#${tag.toLowerCase()}`}</button>)}
        
      </div>
    </div>
  );
}

export default withAuth(Sidebar);