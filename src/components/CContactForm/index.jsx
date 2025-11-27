import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactFormSchema } from '../../utils/validations';
import { cities } from '../../db/General';
import styles from './styles.module.scss';

const CContactForm = ({ className = '', containerClassName = '' }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      city: '',
      phone: '',
      email: '',
      kvkk: false,
      marketing: false,
    },
  });

  const handlePhoneChange = (e, onChange) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      onChange(value);
    }
  };

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className={`${styles['c-contact-form__container']} ${containerClassName}`}>
      <div className={`${styles['c-contact-form__card']} ${className}`}>
        <h2 className={styles['c-contact-form__title']}>Sizi Arayalım!</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles['c-contact-form__form']}>
          <div className={styles['c-contact-form__group']}>
            <label htmlFor="name">Adınız</label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => <input placeholder="Adınız" type="text" id="name" {...field} className={errors.name ? styles['c-contact-form__input-error'] : ''} />}
            />
          </div>

          <div className={styles['c-contact-form__group']}>
            <label htmlFor="city">Şehir</label>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <select id="city" {...field} className={errors.city ? styles['c-contact-form__input-error'] : ''}>
                  <option value="">Şehir seçiniz</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>

          <div className={styles['c-contact-form__group']}>
            <label htmlFor="phone">Telefon Numaranız</label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input
                  placeholder="Telefon Numaranız"
                  type="tel"
                  id="phone"
                  {...field}
                  maxLength={11}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  onChange={(e) => handlePhoneChange(e, field.onChange)}
                  className={errors.phone ? styles['c-contact-form__input-error'] : ''}
                />
              )}
            />
          </div>

          <div className={styles['c-contact-form__group']}>
            <label htmlFor="email">E-posta Adresiniz</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => <input placeholder="E-posta Adresiniz" type="email" id="email" {...field} className={errors.email ? styles['c-contact-form__input-error'] : ''} />}
            />
          </div>

          <div className={`${styles['c-contact-form__checkbox']} ${errors.kvkk ? styles['c-contact-form__checkbox-error'] : ''}`}>
            <Controller name="kvkk" control={control} render={({ field }) => <input type="checkbox" id="kvkk" checked={field.value} onChange={(e) => field.onChange(e.target.checked)} />} />
            <div className={styles['c-contact-form__checkbox-content']}>
              <label htmlFor="kvkk">KVKK kişisel verilerin korunması kanunu okudum kabul ediyorum *</label>
            </div>
          </div>

          <div className={styles['c-contact-form__checkbox']}>
            <Controller name="marketing" control={control} render={({ field }) => <input type="checkbox" id="marketing" checked={field.value} onChange={(e) => field.onChange(e.target.checked)} />} />
            <label htmlFor="marketing">Kampanyalardan haberdar olmak için tarafıma elektronik ileti gönderilmesini kabul ederim.</label>
          </div>

          <button type="submit" className={styles['c-contact-form__submit']} disabled={isSubmitting || !isValid}>
            {isSubmitting ? 'Gönderiliyor...' : 'Formu Gönder'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CContactForm;
