import React, { useState, useRef } from 'react';
import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HeroSection = () => {
  const swiperRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    phone: '',
    email: '',
    kvkk: false,
    marketing: false
  });
  
  const cities = [
    'İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Adana', 'Konya', 
    'Gaziantep', 'Şanlıurfa', 'Kocaeli', 'Mersin', 'Diyarbakır', 'Hatay', 'Manisa'
  ];
  
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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className={styles['c-hero']}>
      <div className={styles['c-hero__container']}>
        <div className={styles['c-hero__slider-container']}>
          <Swiper
            ref={swiperRef}
            spaceBetween={0}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
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
                    <img 
                      src={slide.desktopImage} 
                      alt="Slide" 
                      loading="lazy"
                      className={styles['c-hero__slide-img']}
                    />
                  </picture>
                </div>
              </SwiperSlide>
            ))}
            <div className={styles['c-hero__navigation']}>
              <button 
                className={`${styles['c-hero__nav-button']} ${styles['c-hero__nav-button--prev']}`}
                aria-label="Previous slide"
              />
              <button 
                className={`${styles['c-hero__nav-button']} ${styles['c-hero__nav-button--next']}`}
                aria-label="Next slide"
              />
            </div>
          </Swiper>
          <div className={styles['c-hero__dots']}></div>
        </div>

        <div className={styles['c-hero__form-container']}>
          <div className={styles['c-hero__form-card']}>
            <h2 className={styles['c-hero__form-title']}>Sizi Arayalım!</h2>
            <form onSubmit={handleSubmit} className={styles['c-hero__form']}>
              <div className={styles['c-hero__form-group']}>
                <label htmlFor="name">Adınız</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className={styles['c-hero__form-group']}>
                <label htmlFor="city">Şehir</label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Şehir seçiniz</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                  ))}
                </select>
              </div>
              
              <div className={styles['c-hero__form-group']}>
                <label htmlFor="phone">Telefon Numaranız</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className={styles['c-hero__form-group']}>
                <label htmlFor="email">E-posta Adresiniz</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className={styles['c-hero__form-checkbox']}>
                <input
                  type="checkbox"
                  id="kvkk"
                  name="kvkk"
                  checked={formData.kvkk}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="kvkk">
                  KVKK kişisel verilerin korunması kanunu okudum kabul ediyorum *
                </label>
              </div>
              
              <div className={styles['c-hero__form-checkbox']}>
                <input
                  type="checkbox"
                  id="marketing"
                  name="marketing"
                  checked={formData.marketing}
                  onChange={handleInputChange}
                />
                <label htmlFor="marketing">
                  Kampanyalardan haberdar olmak için tarafıma elektronik ileti gönderilmesini kabul ederim.
                </label>
              </div>
              
              <button type="submit" className={styles['c-hero__form-submit']}>
                Formu Gönder
              </button>
            </form>
          </div>
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
