import { useForm, SubmitHandler } from "react-hook-form";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../styles/components/Form.scss';

interface IFormInput {
  fullName: string;
  mail: string;
  phone: string;
}

const botT = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const botId = import.meta.env.VITE_TELEGRAM_BOT_ID;

const validateName = (value: string) => {
  const parts = value.trim().split(/\s+/);
  return parts.every(part => /^[A-ZА-Я][a-zа-я]*$/.test(part)) || "Имя и фамилия с большой букви";
};

const Form = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<IFormInput>();
  
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const botToken = botT;
      const chatId = botId;
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

      console.log('успішно надіслано');
    } catch (error) {
      console.error('Помилка :', error);
    }
  };

  return (
    <section className="form">
      <p className='form__title info__white'>
      Запишитесь
        <span className='form__title-color'> бесплатно </span><br />
        и получите подарок
      </p>

      <form 
        className="form__forma"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <input 
          className={`form__forma-input ${errors.fullName ? 'form__input-error' : ''}`}
          placeholder="Ваше имя и фамилия"
          {...register("fullName", {
            required: "Введите имя и фамилию",
            maxLength: { value: 20, message: "Максимум 20 символов" },
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
            required: "Введите ваш телефон",
            validate: (value) => {
              const phoneNumberLength = value.replace(/[^0-9]/g, '').length;
              return phoneNumberLength >= 10 || "Введите валидний номер";
            }
          })}
          onChange={phone => setValue("phone", phone, { shouldValidate: false })}
        />
        {errors.phone ? <span className="form__error">{errors.phone.message}</span> : <span className="form__error"></span>}
        
        <input 
          className={`form__forma-input ${errors.mail ? 'form__input-error' : ''}`}
          placeholder="Ваш email"
          {...register("mail", {
            required: "Введите свой email",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Введите валидний email"
            }
          })} 
        />
        {errors.mail ? <span className="form__error">{errors.mail.message}</span> : <span className="form__error"></span>}
        
        <input 
          className="form__forma-button"
          type="submit" 
          value='Записаться бесплатно' 
        />
      </form>

      <p className="form__konfid info__white">
        Нажимая на кнопку я согашаюсь <br /> 
        <span className="form__konfid-link">с политикой конфидециальности</span>
      </p>
    </section>
  );
};

export default Form;
