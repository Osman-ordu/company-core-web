import { stats } from '../../../db/General';
import styles from './styles.module.scss';

const StatsSection = () => {
  return (
    <section className={styles['c-stats']}>
      <div className={`section-container ${styles['c-stats__wrapper']}`}>
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
