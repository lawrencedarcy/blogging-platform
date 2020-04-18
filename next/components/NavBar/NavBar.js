import React from 'react';
import Link from 'next/link'
import styles from './NavBar.module.css';
import { useAuth } from 'use-auth0-hooks';
import { useRouter } from 'next/router'



function NavBar() {
  const { isAuthenticated, isLoading, login, logout } = useAuth();
  const { pathname, query } = useRouter();

  return (
    <div className={styles.nav_wrapper}>
      <div className={styles.navbar}>
      <Link href="/"><a>  <img className={styles.logo_png} src="https://uploads.guim.co.uk/2020/04/15/culture.png" alt="stagetime_logo"></img></a></Link>

        <div className={styles.navbar_logo}><Link href="/"><a>       
 Stagetime</a></Link></div>

        <div className={styles.navbar_write}>
          
          <Link href="/write"><a>Write a post</a></Link></div>
          
      </div>
    </div>
  );
}

export default NavBar;