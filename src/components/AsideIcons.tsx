import '../styles/components/AsideIcons.scss';

const AsideIcons = () => {
  return (
    <div className="images">
      <img className="images__html absolute" src="imgs/html.png"/>
      <img className="images__css absolute" src="imgs/css.png"/>
      <img className="images__js absolute" src="imgs/js.png"/>
      <img className="images__sub absolute" src="imgs/subl.png"/>
      <img className="images__vs absolute" src="imgs/vs.png"/>
      
      <span className="images__html-rect absolute"></span>
      <span className="images__css-rect absolute"></span>
      <span className="images__js-rect absolute"></span>
      <span className="images__sub-rect absolute"></span>
      <span className="images__vs-rect absolute"></span>
    </div>
  )
}

export default AsideIcons;
