import React, { useState } from 'react';
import styles from './styles.module.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    kvkk: false,
    marketing: false,
  });

  const cities = [
    'Adana', 'Adıyaman', 'Afyon', 'Ağrı', 'Aksaray', 'Amasya', 'Ankara', 'Antalya',
    'Ardahan', 'Artvin', 'Aydın', 'Balıkesir', 'Bartın', 'Batman', 'Bayburt', 'Bilecik',
    'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale', 'Çankırı', 'Çorum',
    'Denizli', 'Diyarbakır', 'Düzce', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir',
    'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Iğdır', 'Isparta', 'İstanbul',
    'İzmir', 'Kahramanmaraş', 'Karabük', 'Karaman', 'Kars', 'Kastamonu', 'Kayseri', 'Kırıkkale',
    'Kırklareli', 'Kırşehir', 'Kilis', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 'Manisa',
    'Mardin', 'Mersin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Osmaniye',
    'Rize', 'Sakarya', 'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Şanlıurfa', 'Şırnak',
    'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Uşak', 'Van', 'Yalova', 'Yozgat', 'Zonguldak'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Form submitted successfully!');
    setFormData({
      name: '',
      phone: '',
      city: '',
      kvkk: false,
      marketing: false,
    });
  };

  return (
    <section className={styles['c-contact']}>
      <div className={styles['c-contact__wrapper']}>
        <h2 className={styles['c-contact__title']}>SİZİ ARAYALIM!</h2>
        <form className={styles['c-contact__form']} onSubmit={handleSubmit}>
          <div className={styles['c-contact__group']}>
            <input
              className={styles['c-contact__input']}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Adınız Soyadınız"
              required
            />
          </div>
          <div className={styles['c-contact__group']}>
            <input
              className={styles['c-contact__input']}
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telefon Numaranız"
              required
            />
          </div>
          <div className={styles['c-contact__group']}>
            <select
              className={styles['c-contact__select']}
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            >
              <option value="">Şehir Seçiniz</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
          <div className={styles['c-contact__checkbox-group']}>
            <input
              className={styles['c-contact__checkbox']}
              type="checkbox"
              name="kvkk"
              checked={formData.kvkk}
              onChange={handleChange}
              required
              id="kvkk"
            />
            <label className={styles['c-contact__checkbox-label']} htmlFor="kvkk">
              <strong>KVKK</strong> Kişisel Verilerin Korunması Kanunu'nu okudum kabul ediyorum.
            </label>
          </div>
          <div className={styles['c-contact__checkbox-group']}>
            <input
              className={styles['c-contact__checkbox']}
              type="checkbox"
              name="marketing"
              checked={formData.marketing}
              onChange={handleChange}
              id="marketing"
            />
            <label className={styles['c-contact__checkbox-label']} htmlFor="marketing">
              Kampanyalardan haberdar olmak için tarafıma elektronik ileti gönderilmesini kabul ederim.
            </label>
          </div>
          <button 
            className={styles['c-contact__submit-button']} 
            type="submit" 
            disabled={!formData.kvkk}
          >
            GÖNDER
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

