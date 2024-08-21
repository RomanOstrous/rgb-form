import { useForm, SubmitHandler,} from "react-hook-form";
import '../styles/components/Form.scss';

interface IFormInput {
  foolName: string
  mail: string
  phone: number
}
const Form = () => {
  const { register, handleSubmit} = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  //позабирати підказки до полів і додати інтерактив 

  return (
    <section className="form">
      <p className='form__title info__white' >
        Запишитесь
        <span className='form__title-color '> бесплатно </span><br />
        и получите подарок
      </p>

      <form 
        className="form__forma"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input 
          className="form__forma-input"
          placeholder="Ваше имя и фамилия"
          {...register("foolName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} 
        />
        
        <input
          className="form__forma-input"
          placeholder="Ваш телефон"
          {...register("phone", { required: "Phone number is required" })}
        />

        <input 
          className="form__forma-input"
          placeholder="Ваш email"
          {...register("mail", { required: "Email Address is required" })}
        />

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
  )
}

export default Form;
