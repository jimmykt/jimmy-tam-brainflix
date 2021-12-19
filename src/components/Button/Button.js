import './Button.scss';

export function Button(props) {
  return (
  <button className="button">
    <img className="button__icon" src={props.icon} alt="icon"/>
    <p className="button__text">{props.text}</p>
  </button>
  )
}

export default Button;




export function CancelButton(props) {
  return (
  <button className="cancel-button">
    <p className="cancel-button__text">{props.text}</p>
  </button>
  )
}

