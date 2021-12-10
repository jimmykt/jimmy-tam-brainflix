import "./button.scss"


function Button(props) {
  return (
  <button className="button">
    <img className="button__icon" src={props.icon}/>
    <p className="button__text">{props.text}</p>
  </button>
  )
}

export default Button;
