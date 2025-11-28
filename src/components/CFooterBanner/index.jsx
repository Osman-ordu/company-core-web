import styles from './styles.module.scss';

const CFooterBanner = () => {
  const fields = {
    title: 'Toprakla başlayan, gelecek',
  };
  return (
    <section className={styles['c-footer-banner']}>
      <div className={styles['c-footer-banner__content']}>
        <h5 className={styles['c-footer-banner__title']}>{fields.title}</h5>
      </div>
    </section>
  );
};

export default CFooterBanner;
