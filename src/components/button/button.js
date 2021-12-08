import "./button.scss"

import Upload from "../../assets/images/Icons/upload.svg"


function Button() {
  return (
    <button className="nav__upload-button">
      <img className="nav__upload-icon" src={Upload} alt="upload"></img>
      UPLOAD
    </button>
  );
}

export default Button;