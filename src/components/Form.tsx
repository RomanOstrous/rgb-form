import { useForm, SubmitHandler } from "react-hook-form";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../styles/components/Form.scss';

interface IFormInput {
  fullName: string;
  mail: string;
  phone: string;
}

const validateName = (value: string) => {
  const parts = value.trim().split(/\s+/);
  return parts.every(part => /^[A-ZА-Я][a-zа-я]*$/.test(part)) || "Ім'я та прізвище повинні починатися з великої літери";
};

const Form = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<IFormInput>();
  
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const botToken = '7268050885:AAEtftEU_GPL5MzgV6u5uYG1g1_ydaWizVc';
      const chatId = '738465465';
      const message = `
        Тестове повідомлення:
        Ім'я та прізвище: ${data.fullName}
        Телефон: ${data.phone}
        Email: ${data.mail}
      `;

      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      if (!response.ok) {
        throw new Error('Не вдалося надіслати повідомлення');
      }

      console.log('Повідомлення успішно надіслано');
    } catch (error) {
      console.error('Помилка при відправці повідомлення:', error);
    }
  };

  return (
    <section className="form">
      <p className='form__title info__white'>
        Запишіться
        <span className='form__title-color'> безкоштовно </span><br />
        і отримайте подарунок
      </p>

      <form 
        className="form__forma"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <input 
          className={`form__forma-input ${errors.fullName ? 'form__input-error' : ''}`}
          placeholder="Ваше ім'я та прізвище"
          {...register("fullName", {
            required: "Введіть ім'я та прізвище",
            maxLength: { value: 40, message: "Максимум 40 символів" },
            validate: validateName
          })} 
        />
        {errors.fullName ? <span className="form__error">{errors.fullName.message}</span> : <span className="form__error"></span>}
        
        <PhoneInput
          country={'ua'}
          placeholder="Ваш телефон"
          inputProps={{
            name: 'phone',
            required: true,
          }}
          {...register("phone", {
            required: "Введіть номер телефону",
            validate: (value) => {
              const phoneNumberLength = value.replace(/[^0-9]/g, '').length;
              return phoneNumberLength >= 10 || "Введіть валідний номер";
            }
          })}
          onChange={phone => setValue("phone", phone, { shouldValidate: false })}
        />
        {errors.phone ? <span className="form__error">{errors.phone.message}</span> : <span className="form__error"></span>}
        
        <input 
          className={`form__forma-input ${errors.mail ? 'form__input-error' : ''}`}
          placeholder="Ваш email"
          {...register("mail", {
            required: "Введіть свій email",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Введіть валідний email"
            }
          })} 
        />
        {errors.mail ? <span className="form__error">{errors.mail.message}</span> : <span className="form__error"></span>}
        
        <input 
          className="form__forma-button"
          type="submit" 
          value='Записатися безкоштовно' 
        />
      </form>

      <p className="form__konfid info__white">
        Натискаючи на кнопку я погоджуюсь <br /> 
        <span className="form__konfid-link">з політикою конфіденційності</span>
      </p>
    </section>
  );
};

export default Form;
