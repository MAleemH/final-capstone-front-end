/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchTherapists, postTherapist, uploadTherapist } from '../redux/Therapy/therapySlice';
import '../css/NewTherapistPage.css';
import specializationArr from '../components/specialization';
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
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', uploadFile);
    formData.append('upload_preset', 'f00ugkxm');
    const secureUrl = (await dispatch(uploadTherapist(formData))).payload;
    return secureUrl;
  };

  const nullThrapistData = async () => {
    setUsername('');
    setEmail('');
    setAddress('');
    setSpecialty('');
  };

  const handleNewTherapist = async (e) => {
    const cloudinaryImageUrl = await handleUpload(e);
    if (!cloudinaryImageUrl) {
      return;
    }
    const therapistData = {
      therapist: {
        photo: cloudinaryImageUrl,
        name: username,
        address,
        email,
        specialization: specialty,
        phone,
      },
    };
    await dispatch(postTherapist(therapistData));
    await nullThrapistData();
    dispatch(fetchTherapists());
    navigate('/homepage');
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
          <button className="back_none" type="button" onClick={goBack}>
            <img src={backImg} alt="" />
          </button>
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
            <input className="input_name" type="text" placeholder="Name" aria-label="Input Name" value={username} onChange={(e) => setUsername(e.target.value)} required />

            <input className="input_name" type="text" placeholder="Address (State and City)" aria-label="Input Address" value={address} onChange={(e) => setAddress(e.target.value)} required />

            <input className="input_name" type="phone" placeholder="Phone" aria-label="Input Phone" onChange={(e) => setPhone(e.target.value)} required />

            <input className="input_name" type="email" placeholder="Email" aria-label="Input Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <select aria-label="Input Label" className="input_name" onChange={(e) => setSpecialty(e.target.value)} id="specializationId">
              {specializationArr.map((specialty) => (
                <option key={specialty.id} value={specialty.value} aria-label="Input Specialization">{specialty.name}</option>
              ))}
            </select>

            <div className="input_name image_input_container">
              <input type="file" aria-label="Add Image" onChange={(event) => { setUploadFile(event.target.files[0]); }} required />
              <img src={avatarImg} alt="Choose File" />
              <p>{uploadFile ? 'Image Added' : 'Add Image'}</p>
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
