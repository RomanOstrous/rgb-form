import '../styles/components/Author.scss';

const Author = () => {
  return (
    <div className="author">
      <div className="author__info">
        <img src="imgs/image 1347.png" alt="Bonus" className="author__info-img"/>
        <div className="author__info-container">
          <p className="author__bonus info__white">Бонус за регистрацию</p>
          <p className="author__text info__white">
            PDF-файл "5 преимуществ <br />
            профессии веб-дизайнера" 
          </p>
        </div>
      </div>

      <div className="author__info">
        <img src="imgs/Group 3874.png" alt="Author" className="author__info-img"/>
        <div className="author__info-container">
          <p className="author__kiril info__white">
            КИРИЛЛ {' '}
            <span className="author__kiril-blue">
              КАСАТОНОВ
            </span>
          </p>
          <p className="author__text info__white">
            6 лет коммерческого опыта с такими 
            компаниями как <br />
            Mercedes-Benz и другими крупными корпорациями 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Author;
