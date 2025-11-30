import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FooterCopyright from '../components/layout/FooterCopyright';
import BottomNavbar from '../components/layout/BottomNavbar';
import CScrollToTop from '../components/CScrollToTop';
import CHelpDesk from '../components/CHelpDesk';
import styles from './styles.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles['c-layout__main']}>{children}</main>
      <Footer />
      <FooterCopyright />
      <BottomNavbar />
      <CScrollToTop />
      <CHelpDesk />
    </>
  );
};

export default Layout;
