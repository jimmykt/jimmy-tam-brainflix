import './Button.scss';
//test

function Button(props) {
  return (
  <button className="button">
    <img className="button__icon" src={props.icon} alt="icon"/>
    <p className="button__text">{props.text}</p>
  </button>
  )
}

export default Button;
