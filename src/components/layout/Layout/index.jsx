import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from './styles.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles['c-layout__main']}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

