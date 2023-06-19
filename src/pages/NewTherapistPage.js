/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postTherapist, uploadTherapist } from '../redux/Therapy/therapySlice';
import '../css/NewTherapistPage.css';
import specializationArr from '../components/speciliazation';
import backImg from '../img/back.png';
import fadingBreak from '../img/fading_break.png';
import logoImg from '../img/logo.png';
import avatarImg from '../img/user.png';

function NewTherapistPage() {
  const dispatch = useDispatch();
  const [uploadFile, setUploadFile] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState(0);
  const [specialty, setSpecialty] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', uploadFile);
    formData.append('upload_preset', 'f00ugkxm');
    const secureUrl = await dispatch(uploadTherapist(formData));
    return secureUrl;
  };

  const nullThrapistData = async () => {
    setUsername('');
    setEmail('');
    setAddress('');
    setSpecialty('');
  };

  const handleNewTherapist = async () => {
    const cloudinaryImageUrl = await handleUpload();
    const therapistData = {
      secureUrl: cloudinaryImageUrl,
      name: username,
      address,
      email,
      specialty,
      phone,
      // Add other form data fields as needed
    };
    console.log(therapistData);
    // Send the data to the database
    const response = await dispatch(postTherapist(therapistData));
    console.log(response);
    await nullThrapistData();
  };

  useEffect(() => {
    let active = true;
    (async () => {
      if (active) {
        setErrorMessage('');
      }
    })();
    return () => {
      active = false;
    };
  }, [dispatch]);

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
          <p>
            &nbsp;
            {`${errorMessage || 'New Therapist'}`}
            &nbsp;
          </p>
          <figure>
            {' '}
            <img className="rotate_breakline" src={fadingBreak} alt="" />
            {' '}
          </figure>
        </div>

        <form action="" className="new_therapist_form">
          <fieldset className="fieldset_border_none">
            <input className="input_name" type="text" placeholder="Name" aria-label="Input Name" required />

            <input className="input_name" type="text" placeholder="Address (State and City)" aria-label="Input Address" value={address} onChange={(e) => setAddress(e.target.value)} required />

            <input className="input_name" type="phone" placeholder="Phone" aria-label="Input Phone" onChange={(e) => setPhone(e.target.value)} required />

            <input className="input_name" type="email" placeholder="Email" aria-label="Input Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <select aria-label="Input Label" className="input_name" value={specialty} onChange={(e) => setSpecialty(e.target.value)} id="specializationId">
              {specializationArr.map((specialty) => (
                <option key={specialty.id} value={specialty.value} aria-label="Input Specialization">{specialty.name}</option>
              ))}
            </select>

            <div className="input_name image_input_container">
              <input type="file" aria-label="Add Image" onChange={(event) => { setUploadFile(event.target.files[0]); }} required />
              <img src={avatarImg} alt="Choose File" />
              <p>Add Image</p>
            </div>

          </fieldset>

          <fieldset className="fieldset_border_none new_therapist_action">
            <button type="button" onClick={handleNewTherapist}>Submit</button>
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
