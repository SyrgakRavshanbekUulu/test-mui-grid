import React from 'react';
import styles from './Header.module.scss'
import { AppBar } from '@mui/material';

type HeaderProps = {

};

const Header:React.FC<HeaderProps> = () => {

  return <AppBar component="nav" className={styles.header}>
    <div className={styles.header__logo}>Logo</div>
  </AppBar>
}
export default Header;