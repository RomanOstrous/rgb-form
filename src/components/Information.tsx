import '../styles/components/Information.scss';

const Information = () => {
  return (
    <section className='info'>
      <div className="info__data">
        <img 
          src="icons/gg_time.svg" 
          alt=""
          className="info__data-ico"
        />
        <p className="info__data-text info__white">Вебинар</p>
      </div>

      <h1 className='info__title'>FRONT-END</h1>

      <p className='info__subtitle info__white'>
        <span className='info__subtitle-red'>С НУЛЯ </span>
        легкий старт в IT профессии
      </p>

      <p className='info__text info__white'>
        Узнайте какими{' '}
        <span className='info__text-strong'> 
          навыками должен обладать <br />
          фронтенд разработчик в 2022 году
        </span>
        {' '}и как начать <br />
        карьеру в востребованной профессии
      </p>
    </section>
  )
}

export default Information;
