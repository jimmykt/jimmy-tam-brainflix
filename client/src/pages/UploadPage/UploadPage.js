import './UploadPage.scss'
import { useHistory } from "react-router-dom";
import { Button, CancelButton } from '../../components/Button/Button';
import axios from 'axios';
import thumbnailImage from '../../assets/images/Upload-video-preview.jpg'
import UploadSVG from "../../assets/images/Icons/upload.svg";

function UploadPage() {
  let history = useHistory();

  const cancelClick = (event) => {
    event.preventDefault();
    alert("Video Upload Cancelled")
    history.push('/')
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target.title.value);
    console.log(event.target.description.value);

    axios.post(process.env.REACT_APP_API_URL + '/videos', {
      title: event.target.title.value,
      description: event.target.description.value,
      image: (process.env.REACT_APP_API_URL + "/images/Upload-video-preview.jpg")
    })
    .then(
      alert("You video has been uploaded!")
    );
   history.push('/')
  }

  return (
    <main className='upload'>
      <h1 className='upload__title'>Upload Video</h1>

      <div className='upload__container'>
        <div className='upload__thumbnail'>
          <p className="upload__thumbnail-title">VIDEO THUMBNAIL</p>
          <img className="upload__thumbnail-image" src={thumbnailImage} alt='bike ride'></img>
        </div>

        <form className='upload__form' onSubmit={handleSubmit} >
          <div>
            <label className="upload__label-title">TITLE YOUR VIDEO</label>
            <input className="upload__input-title" type="text" name="title" id="title" placeholder="Add a title to your video"></input>
          </div>

          <div>
            <label className="upload__label-description">ADD A VIDEO DESCRIPTION</label>
            <textarea className="upload__input-description" name="description" id="description" placeholder="Add a description to your video"></textarea>
          </div>

          <div className="upload__buttons">
            <Button className="upload__button-publish" icon={UploadSVG} text="PUBLISH" function={handleSubmit}/>
            <CancelButton className="upload__button-cancel" text="CANCEL" function={cancelClick} />
          </div>
        </form>
      </div>
    </main>
  )
}

export default UploadPage;
