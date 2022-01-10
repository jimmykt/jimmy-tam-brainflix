import './Button.scss';

export function Button(props) {
  return (
  <button className={`button ${props.className}`} type="submit" onSubmit={props.function}>
    <img className="button__icon" src={props.icon} alt="icon"/>
    <p className="button__text">{props.text}</p>
  </button>
  )
}
export default Button;

export function CancelButton(props) {
  return (
  <button className="cancel-button" onClick={props.function}>
    <p className="cancel-button__text">{props.text}</p>
  </button>
  )
}

