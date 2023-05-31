import { Container } from '@mui/material';
import Header from '../Header/Header';
import React, { FC, ReactNode } from 'react';
import styles from './Layout.module.scss'
import cn from 'classnames'

type LayoutProps = {
  children: ReactNode,
  className?: string,
};

const Layout:React.FC<LayoutProps> = ({children, className}) => {

  return <div>
    <Header />
    <Container className={cn(styles.content, className)}>
      {children}
    </Container>
  </div>
}
export default Layout;