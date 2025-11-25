import React, { useRef } from 'react';
import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CContactForm from '../../CContactForm';

const HeroSection = () => {
  const swiperRef = useRef(null);

  const slides = [
    {
      desktopImage: 'https://arsago.com.tr/wp-content/uploads/2025/08/web-1100x660px.jpg',
      mobileImage: 'https://arsago.com.tr/wp-content/uploads/2025/08/mobil-480x720px.jpg',
    },
    {
      desktopImage: 'https://arsago.com.tr/wp-content/uploads/2025/04/mugla-web.jpg',
      mobileImage: 'https://arsago.com.tr/wp-content/uploads/2025/06/mugla-mobil.jpg',
    },
    {
      desktopImage: 'https://arsago.com.tr/wp-content/uploads/2025/08/1_Web.jpg',
      mobileImage: 'https://arsago.com.tr/wp-content/uploads/2025/08/1_Mobil.jpg',
    },
  ];

  return (
    <section className={styles['c-hero']}>
      <div className={styles['c-hero__container']}>
        <div className={styles['c-hero__slider-container']}>
          <Swiper
            ref={swiperRef}
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={true}
            loop={false}
            watchSlidesProgress={true}
            resistance={true}
            resistanceRatio={0.85}
            simulateTouch={true}
            allowTouchMove={true}
            touchEventsTarget="container"
            touchRatio={0.5}
            touchAngle={45}
            threshold={50}
            longSwipesRatio={0.5}
            longSwipesMs={500}
            followFinger={true}
            shortSwipes={true}
            grabCursor={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: `.${styles['c-hero__dots']}`,
              bulletClass: styles['c-hero__dot'],
              bulletActiveClass: styles['c-hero__dot--active'],
            }}
            navigation={{
              nextEl: `.${styles['c-hero__nav-button--next']}`,
              prevEl: `.${styles['c-hero__nav-button--prev']}`,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className={styles['c-hero__slider']}
            speed={800}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className={styles['c-hero__slide']}>
                <div className={styles['c-hero__slide-bg']}>
                  <picture>
                    <source media="(min-width: 768px)" srcSet={slide.desktopImage} />
                    <source media="(max-width: 767px)" srcSet={slide.mobileImage} />
                    <img src={slide.desktopImage} alt="Slide" loading="lazy" className={styles['c-hero__slide-img']} />
                  </picture>
                </div>
              </SwiperSlide>
            ))}
            <div className={styles['c-hero__navigation']}>
              <button className={`${styles['c-hero__nav-button']} ${styles['c-hero__nav-button--prev']}`} aria-label="Previous slide" />
              <button className={`${styles['c-hero__nav-button']} ${styles['c-hero__nav-button--next']}`} aria-label="Next slide" />
            </div>
          </Swiper>
          <div className={styles['c-hero__dots']}></div>
        </div>

        <div className={styles['c-hero__form-container']}>
          <CContactForm />
        </div>

        <div className={styles['c-hero__mobile-cta']}>
          <p className={styles['c-hero__mobile-text']}>
            Siz de yatırım yapmak ve detaylı bilgi almak için <span className={styles['c-hero__mobile-highlight']}>formu doldurun!</span>
          </p>
          <button className={styles['c-hero__mobile-button']}>Sizi Arayalım!</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
