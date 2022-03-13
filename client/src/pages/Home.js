import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar';
import upload from '../assets/upload.svg';
import select from '../assets/select.svg';

export default function Home() {
  const [file, setfile] = useState(null);
  const [filePath, setFilePath] = useState(null);

  const navigate = useNavigate();

  const onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', file);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    // const url = 'http://localhost:4000/user/upload/';
    const url = 'https://copycat-imuhammadosama.herokuapp.com/user/upload';

    axios
      .post(url, formData, config)
      .then((res) => {
        navigate(`/form?file=${res.data.file}`);
        alert('Image uploaded successfully!!');
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const onInputChange = (e) => {
    setfile(e.target.files[0]);
  };

  function fileUpload() {
    document.getElementById('file-upload').click();
    // navigate('/form');
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
      {/* Form */}
      <form onSubmit={onFormSubmit}>
        <input type='file' id='file-upload' onChange={onInputChange} />
        <button type='submit'>Submit</button>
      </form>
      <div className='center py-32'>
        <img className='center pointer' src={select} onClick={fileUpload} />
      </div>
    </div>
  );
}
