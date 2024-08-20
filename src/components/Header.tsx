import '../styles/components/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <img 
        src="icons/powercode.svg" 
        alt="Logo"
        className="header__logo"
      />

      <div className="header__data">
        <div className="header__data-container">
          <img 
            src="icons/calendar_today.svg" 
            alt="" 
            className="header__data-ico"
          />
          <p className="header__data-text">28 декабря</p>
        </div>

        <div className="header__data-container">
          <img 
            src="icons/clock.svg" 
            alt=""
            className="header__data-ico"
          />
          <p className="header__data-text">3,5 часа</p>
        </div>
      </div>
    </header>
  )
}

export default Header
