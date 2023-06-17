import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/User/userSlice';
import roleArr from '../components/roles';
import '../css/RegisterPage.css';
import backImg from '../img/back.png';
import eyeImg from '../img/eye.png';
import fadingBreak from '../img/fading_break.png';
import logoImg from '../img/logo.png';

function RegisterPage() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [inputPas1, setinputPas1] = useState('');
  const [inputPas2, setinputPas2] = useState('');
  const [role, setRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordType1, setPasswordType1] = useState('password');
  const [passwordType2, setPasswordType2] = useState('password');
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const similarPassword = async (inputPas1, inputPas2) => {
    if (inputPas1 !== inputPas2) {
      setErrorMessage('Unmatch Pass');
      return;
    }
    setErrorMessage('');
  };

  const nullUserData = async () => {
    setUsername('');
    setEmail('');
    setinputPas1('');
    setinputPas2('');
  };

  const handleRegister = async () => {
    const pass1 = inputPas1.replace(/\s/g, '').toLowerCase();
    const pass2 = inputPas2.replace(/\s/g, '').toLowerCase();
    console.log(username, email, inputPas1, inputPas2);
    await similarPassword(pass1, pass2);
    if (username === '' || inputPas1 === '' || inputPas2 === '' || email === '' || role === '') {
      return;
    }
    const userData = {
      user: {
        name: username, password: inputPas1, password_confirmation: inputPas2, email, role,
      },
    };

    console.log(userData);
    dispatch(registerUser(userData));
    await nullUserData();
    navigate('login');
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
  }, []);

  return (
    <div className="register_body">

      <header className="register_header">
        <nav>
          <button className="back_none" type="button" onClick={goBack}>
            <img src={backImg} alt="" />
          </button>
        </nav>
      </header>

      <main className="register_main">
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
            {' '}
            {`${errorMessage || 'Register with'}`}
            {' '}
            &nbsp;
            {' '}
          </p>
          <figure>
            {' '}
            <img className="rotate_breakline" src={fadingBreak} alt="" />
            {' '}
          </figure>
        </div>

        <form action="" className="register_form">
          <fieldset className="fieldset_border_none">
            <input className="input_name" type="text" value={username} placeholder="Username" aria-label="Input Username" onChange={(e) => setUsername(e.target.value)} required />

            <input className="input_name" type="email" value={email} placeholder="Email" aria-label="Input Email" onChange={(e) => setEmail(e.target.value)} required />

            <div className="password_box">
              <input className="input_password" type={passwordType1} value={inputPas1} placeholder="Password" aria-label="Input Password" onChange={(e) => setinputPas1(e.target.value)} required />
              {passwordType1 === 'password'
                ? (
                  <figure className="eyebox">
                    <button className="password_display" type="button" onClick={() => setPasswordType1('text')}>
                      <img src={eyeImg} alt="" />
                    </button>
                  </figure>
                )
                : (
                  <figure className="eyebox">
                    <button className="password_display" type="button" onClick={() => setPasswordType1('password')}>
                      <img src={eyeImg} alt="" />
                    </button>
                  </figure>
                )}
            </div>

            <div className="password_box">
              <input className="input_password" type={passwordType2} value={inputPas2} placeholder="Re-enter Password" aria-label="Input Password" onChange={(e) => setinputPas2(e.target.value)} required />
              {passwordType2 === 'password'
                ? (
                  <figure className="eyebox">
                    <button className="password_display" type="button" onClick={() => setPasswordType2('text')}>
                      <img src={eyeImg} alt="" />
                    </button>
                  </figure>
                )
                : (
                  <figure className="eyebox">
                    <button className="password_display" type="button" onClick={() => setPasswordType2('password')}>
                      <img src={eyeImg} alt="" />
                    </button>
                  </figure>
                )}
            </div>

            <select aria-label="Input Label" className="input_name" onChange={(e) => setRole(e.target.value)} id="specializationId">
              {roleArr.map((role) => (
                <option key={role.id} value={role.value} aria-label="Input Specialization">{role.name}</option>
              ))}
            </select>

          </fieldset>

          <fieldset className="fieldset_border_none register_action">
            <button type="button" onClick={handleRegister}>Submit</button>
          </fieldset>
        </form>

        <div className="register_main_div">
          <p>
            {' '}
            <Link to="/login" className="td_none">
              already registered?
            </Link>
            {' '}
          </p>
        </div>

      </main>

      <footer className="register_footer">
        <ul className="list_style_none">
          <li><Link to="/register" className="td_none"> terms </Link></li>
          <li><Link to="/register" className="td_none">  privacy </Link></li>
        </ul>
      </footer>

    </div>
  );
}

export default RegisterPage;
