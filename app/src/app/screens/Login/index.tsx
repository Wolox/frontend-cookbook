import React from 'react'
import styles from './styles.module.scss'
function Login() {
  const loginToGithubURL = `http://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}`;

  return (
    <div className={`column middle center full-width full-height ${styles.container}`}>
        <h1 className={`${styles.bigTitle} ${styles.fadeInUp}`}>Front End Cookbook</h1>
        <a href={loginToGithubURL} className={`row middle center ${styles.link} ${styles.fadeInUp} delay`}>Let's go</a>
    </div>
  )
}

export default Login
