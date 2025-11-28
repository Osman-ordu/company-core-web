import React from 'react';
import styles from './styles.module.scss';

const CQuadrupleTextArea = () => {
  const fields = [
    {
      title: 'Sürdürülebilirlik odaklı projeler',
      description: '“Her Proje Bir Orman” gibi çevreyi koruma hedefli girişimleri büyütmek. Enerji verimliliği ve çevre dostu malzeme kullanımına öncelik vermek.',
    },
    {
      title: 'Dijitalleşme ve teknoloji kullanımı',
      description:
        'Yapay zeka destekli müşteri analitiği ve satış süreçleriyle hızlı ve etkili hizmet sunmak. çevrimiçi arsa, tarla, ev alım ve satım platformlarını genişleterek dijital erişimi artırmak.',
    },
    {
      title: 'Müşteri memnuniyeti ve şeffaflık',
      description:
        'Yatırımcıların bilgiye hızlı ve kolay ulaşabilmesi için şeffaf veri paylaşım platformları oluşturmak. çağrı merkezi ve dijital destek süreçlerini güçlendirerek müşteri deneyimini iyileştirmek.',
    },
    {
      title: 'Eğitim ve iş gücü gelişimi',
      description:
        'Arsago Akademi, Arsago Sertifika ile sektöre nitelikli iş gücü yetiştirmek. Çalışanlar ve İş Ortaklarının gelişimlerini sağlayarak sektördeki yeniliklere uyum sağlamalarını desteklemek.',
    },
  ];

  return (
    <section className={`section-container ${styles['c-quadruple-text-area']}`}>
      <div className={styles['c-quadruple-text-area__container']}>
        {fields.map((field, index) => (
          <div key={index} className={styles['c-quadruple-text-area__field']}>
            <h5 className={styles['c-quadruple-text-area__field-title']}>{field.title}</h5>
            <p className={styles['c-quadruple-text-area__field-description']}>{field.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CQuadrupleTextArea;
