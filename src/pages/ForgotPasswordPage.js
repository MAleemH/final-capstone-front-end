import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../redux/User/userSlice';
import '../css/ForgotPasswordPage.css';
import backImg from '../img/back.png';
import eyeImg from '../img/eye.png';
import fadingBreak from '../img/fading_break.png';
import logoImg from '../img/logo.png';

function ForgotPasswordPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [inputPas1, setinputPas1] = useState('');
  const [inputPas2, setinputPas2] = useState('');
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
    setEmail('');
    setinputPas1('');
    setinputPas2('');
  };

  const handleForgotPass = async () => {
    const pass1 = inputPas1.replace(/\s/g, '').toLowerCase();
    const pass2 = inputPas2.replace(/\s/g, '').toLowerCase();
    console.log(email, inputPas1, inputPas2);
    await similarPassword(pass1, pass2);
    const userData = {
      user: {
        password: inputPas1, password_confirmation: inputPas2, email,
      },
    };

    console.log(userData);
    await dispatch(forgotPassword(userData));
    await nullUserData();
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
    <div className="forgot_page_body">

      <header className="forgot_page_header">
        <nav>
        <button type="button" onClick={goBack}>
            <img src={backImg} alt="" />
          </button>
        </nav>
      </header>

      <main className="forgot_page_main">
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
            {`${errorMessage || 'Forgot Password'}`}
          </p>
          <figure>
            {' '}
            <img className="rotate_breakline" src={fadingBreak} alt="" />
            {' '}
          </figure>
        </div>

        <form action="" className="forgot_page_form">
          <fieldset className="fieldset_border_none">
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
          </fieldset>

          <fieldset className="fieldset_border_none forgot_page_action">
            <button type="button" onClick={handleForgotPass}>Submit</button>
          </fieldset>
        </form>

        <div className="forgot_page_main_div">
          <p>
            {' '}
            <Link className="td_none" to="/register"> need an account? </Link>
            {' '}
          </p>

          <button type="button">
            <Link className="td_none" to="/forgot_page"> LOGIN </Link>
          </button>
        </div>

      </main>

      <footer className="forgot_page_footer">
        <ul className="list_style_none">
          <li>
            {' '}
            <Link className="td_none" to="/register"> terms </Link>
            {' '}
          </li>
          <li>
            {' '}
            <Link className="td_none" to="/register"> privacy </Link>
            {' '}
          </li>
        </ul>
      </footer>

    </div>
  );
}

export default ForgotPasswordPage;
