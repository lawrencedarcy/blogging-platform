import React from 'react';
import styles from './Sidebar.module.css';

function Sidebar({tags, getPostByTag}) {

  const tagsList = new Set;
  tags.map(arr => arr.map(tag => tagsList.add(tag)));
  const tagsArr = Array.from(tagsList);

  const clickHandler = (evt) => {
    console.log('clickhandler says', evt.target.value)
    getPostByTag(evt.target.value);
  }

  return (
    <div className={styles.sidebar}>
  
      <div className={styles.sidebar_profile}></div>
      <div className={styles.sidebar_search}></div>
      <div className={styles.sidebar_title}>Filter by tag</div>
      <div className={styles.sidebar_tags}>
    {tagsArr.map(tag => <button className={styles.sidebar_tag} value={tag} onClick={clickHandler}>{`#${tag.toLowerCase()}`}</button>)}
        
      </div>
    </div>
  );
}

export default Sidebar;