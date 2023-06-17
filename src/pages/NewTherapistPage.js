/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/NewTherapistPage.css';
import { useDispatch } from 'react-redux';
import specializationArr from '../components/Speciliazation';
import backImg from '../img/back.png';
import fadingBreak from '../img/fading_break.png';
import logoImg from '../img/logo.png';
import avatarImg from '../img/user.png';
import { postTherapist, uploadTherapist } from '../redux/Therapy/therapySlice';

function NewTherapistPage() {
  const dispatch = useDispatch();
  const [uploadFile, setUploadFile] = useState('');
  const [inputName] = useState('');
  const [inputAddress] = useState('');
  // const [cloudinaryImage, setCloudinaryImage] = useState('');
  // const cloudinaryAPI = 'https://api.cloudinary.com/v1_1/drhbncewu/image/upload';
  // const postDataAPI = 'http://your-database-api.com/upload';

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', uploadFile);
    formData.append('upload_preset', 'f00ugkxm');
    const secureUrl = await dispatch(uploadTherapist(formData));
    return secureUrl;
  };

  const handleSubmit = async () => {
    const cloudinaryImageUrl = await handleUpload();
    const dataToSend = {
      secureUrl: cloudinaryImageUrl,
      name: inputName,
      address: inputAddress,
      // Add other form data fields as needed
    };
    // Send the data to your database
    const response = await dispatch(postTherapist(dataToSend));
    console.log(response);
  };

  return (
    <div className="new_therapist_body">

      <header className="new_therapist_header">
        <nav>
          <Link to="/">
            <img src={backImg} alt="" />
          </Link>
        </nav>
      </header>

      <main className="new_therapist_main">
        <figure className="logo_fig">
          <Link to="/">
            <img src={logoImg} alt="" />
          </Link>
        </figure>

        <div className="fadebreak_box">
          <figure>
            {' '}
            <img src={fadingBreak} alt="" />
            {' '}
          </figure>
          <p> &nbsp; New Therapist &nbsp; </p>
          <figure>
            {' '}
            <img className="rotate_breakline" src={fadingBreak} alt="" />
            {' '}
          </figure>
        </div>

        <form action="" className="new_therapist_form">
          <fieldset className="fieldset_border_none">
            <input className="input_name" type="text" placeholder="Name" aria-label="Input Name" required />

            <input className="input_name" type="text" placeholder="Address (State and City)" aria-label="Input Address" required />

            <input className="input_name" type="phone" placeholder="Phone" aria-label="Input Phone" required />

            <input className="input_name" type="email" placeholder="Email" aria-label="Input Email" required />

            <input className="input_name" type="datetime-local" placeholder="Time" aria-label="Input Date and Time" required />

            <select aria-label="Input Label" className="input_name" id="specializationId">
              {specializationArr.map((specialty) => (
                <option key={specialty} value={specialty.value} aria-label="Input Specialization">{specialty.name}</option>
              ))}
            </select>

            <div className="input_name image_input_container">
              <input type="file" aria-label="Add Image" onChange={(event) => { setUploadFile(event.target.files[0]); }} />
              <img src={avatarImg} alt="Choose File" />
              <p>Add Image</p>
            </div>

          </fieldset>

          <fieldset className="fieldset_border_none new_therapist_action">
            <button type="button" onClick={handleSubmit}>Submit</button>
          </fieldset>
        </form>

      </main>

      <footer className="new_therapist_footer">
        <ul className="list_style_none">
          <li><Link to="/new_therapist" className="td_none"> terms </Link></li>
          <li><Link to="/new_therapist" className="td_none">  privacy </Link></li>
        </ul>
      </footer>

    </div>
  );
}

export default NewTherapistPage;
