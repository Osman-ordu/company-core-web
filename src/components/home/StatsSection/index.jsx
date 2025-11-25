import styles from './styles.module.scss';

const StatsSection = () => {

    const stats = [
        {
          number: '81',
          label: 'ülke',
        },
        {
          number: '30+',
          label: 'şehir',
        },
        {
          number: '50+',
          label: 'tamamlanan proje',
        },
        {
          number: '5M+',
          label: 'm² proje alanı',
        },
        {
          number: '10K+',
          label: 'mutlu müşteri',
        },
      ];
      
  return (
    <section className={styles['c-stats']}>
    <div className={styles['c-stats__wrapper']}>
      <div className={styles['c-stats__grid']}>
        {stats.map((stat, index) => (
          <div key={index} className={styles['c-stats__item']}>
            <div className={styles['c-stats__number']}>{stat.number}</div>
            <p className={styles['c-stats__label']}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default StatsSection;