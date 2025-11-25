import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import FooterCopyright from '../FooterCopyright';
import styles from './styles.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles['c-layout__main']}>{children}</main>
      <Footer />
      <FooterCopyright />
    </>
  );
};

export default Layout;

