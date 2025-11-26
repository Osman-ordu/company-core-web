import * as yup from 'yup';

export const contactFormSchema = yup.object().shape({
    name: yup.string().required('Adınız gereklidir').min(2, 'Adınız en az 2 karakter olmalıdır'),
    city: yup.string().required('Şehir seçimi gereklidir'),
    phone: yup
      .string()
      .required('Telefon numaranız gereklidir')
      .matches(/^[0-9]+$/, 'Geçerli bir telefon numarası giriniz')
      .min(10, 'Telefon numaranız en az 10 karakter olmalıdır')
      .max(11, 'Telefon numaranız en fazla 11 karakter olabilir'),
    email: yup.string().required('E-posta adresiniz gereklidir').email('Geçerli bir e-posta adresi giriniz'),
    kvkk: yup.boolean().oneOf([true], 'KVKK onayı gereklidir'),
    marketing: yup.boolean(),
  });