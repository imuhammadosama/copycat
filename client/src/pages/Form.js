import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

export default function Form(props) {
  const form = useRef();
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const { search } = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    setFile(
      `/Users/osama/Documents/Projects/copycat/public/${searchParams.get(
        'file'
      )}`
    );
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_4gjyi7p',
        'template_wsf6ksr',
        form.current,
        'VdSVobMfhmKrcOFN4'
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate('/thankyou');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type='text' name='name' />
        <label>Email</label>
        <input type='email' name='email' />
        <label>Message</label>
        <textarea name='message' />
        <input type='submit' value='Send' />
      </form>
      <img src={file} />
    </div>
  );
}
