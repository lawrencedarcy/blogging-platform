import React from 'react';
import Link from 'next/link'
import styles from './NavBar.module.css';


function NavBar() {
  return (
    <div className={styles.nav_wrapper}>
      <div className={styles.navbar}>
        <div className={styles.navbar_logo}><Link href="/"><a>Stagetime</a></Link></div>
        <div className={styles.navbar_write}><Link href="/write"><a>Write a post</a></Link></div>
      </div>
    </div>
  );
}

export default NavBar;