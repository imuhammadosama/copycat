import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import upload from '../assets/upload.svg';
import select from '../assets/select.svg';

export default function Home() {
  const navigate = useNavigate();
  function fileUpload() {
    document.getElementById('file-upload').click();
    navigate('/form');
  }
  return (
    <div>
      <Navbar />
      <div className='center t-48'>We will do your math homework for you</div>
      <div className='center py-32'>
        <img className='center pointer' src={upload} onClick={fileUpload} />
      </div>
      <div className='center t-32'>1. take a photo of your homework</div>
      <div className='center t-32'>2. drag and drop your photo here</div>
      <input type='file' id='file-upload' />
      <div className='center py-32'>
        <img className='center pointer' src={select} onClick={fileUpload} />
      </div>
    </div>
  );
}
