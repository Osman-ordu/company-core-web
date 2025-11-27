import { useEffect, useRef, useState } from 'react';
import { countUp } from '../../utils/countUp';
import { stats } from '../../db/General';
import styles from './styles.module.scss';

const CStats = () => {
  const numberRefs = useRef([]);
  const containerRef = useRef(null);

  const [started, setStarted] = useState(false);

  const setRef = (el, index) => {
    if (el) numberRefs.current[index] = el;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);

            // Başla
            numberRefs.current.forEach((el, i) => {
              const targetValue = stats[i].number;

              countUp(targetValue, 2500, (v) => {
                el.textContent = v;
              });
            });
          }
        });
      },
      { threshold: 0.3 } // Component %30 görünürse başlar
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [started]);

  return (
    <section className={styles['c-stats']} ref={containerRef}>
      <div className={`section-container ${styles['c-stats__wrapper']}`}>
        <div className={styles['c-stats__grid']}>
          {stats.map((stat, index) => (
            <div key={index} className={styles['c-stats__item']}>
              <p className={styles['c-stats__label']}>{stat.label} </p>
              <div className={styles['c-stats__number']} ref={(el) => setRef(el, index)}>
                0
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CStats;
