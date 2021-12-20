import './UploadPage.scss'
import { useHistory } from "react-router-dom";
import { Button, CancelButton } from '../../components/Button/Button';
import thumbnailImage from '../../assets/images/Upload-video-preview.jpg'
import UploadSVG from "../../assets/images/Icons/upload.svg";

function UploadPage() {

  let history = useHistory();

  const uploadClick = (event) => {
    event.preventDefault();
    alert("You video has been uploaded!")
    history.push('/')
  }

  const cancelClick = (event) => {
    event.preventDefault();
    alert("Video Upload Cancelled")
    history.push('/')
  }

  return (
    <main className='upload'>
    <h1 className='upload__title'>Upload Video</h1>
    <div className='upload__container'>
      <div className='upload__thumbnail'>
        <h2 className="upload__thumbnail-title">VIDEO THUMBNAIL</h2>
        <img className="upload__thumbnail-image" src={thumbnailImage} alt='bike ride'></img>
      </div>
      <form className='upload__form'>
        <div>
          <label className="upload__label-title">TITLE YOUR VIDEO</label>
          <input className="upload__input-title" type="text" name="name" placeholder="Add a title to your video"></input>
        </div>
        <div>
          <label className="upload__label-description">ADD A VIDEO DESCRIPTION</label>
          <textarea className="upload__input-description" name="comments" id="comments" placeholder="Add a description to your video"></textarea>
        </div>
      </form>
    </div>
    <div className="upload__buttons">
      <div className="upload__button-publish" ><Button icon={UploadSVG} text="PUBLISH" function={uploadClick} /></div>
      <div className="upload__button-cancel"><CancelButton text="CANCEL" function={cancelClick} /></div>
    </div>
    </main>
  )
}

export default UploadPage;
