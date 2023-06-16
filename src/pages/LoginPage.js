import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../redux/User/userSlice';
import '../css/LoginPage.css';
import backImg from '../img/back.png';
import eyeImg from '../img/eye.png';
import fadingBreak from '../img/fading_break.png';
import logoImg from '../img/logo.png';

function LoginPage() {
  // const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState('password');
  const [email, setEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    const pass = inputPassword.replace(/\s/g, '').toLowerCase();
    console.log(email, pass);
    const userData = {
      email, password1: pass,
    };
    console.log(userData);
    // dispatch(loginUser(userData));
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
    <div className="login_body">

      <header className="login_header">
        <nav>
          <Link to="/">
            <img src={backImg} alt="" />
          </Link>
        </nav>
      </header>

      <main className="login_main">
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
            {`${errorMessage || 'Login with'}`}
            &nbsp;
            {' '}
          </p>
          <figure>
            {' '}
            <img className="rotate_breakline" src={fadingBreak} alt="" />
            {' '}
          </figure>
        </div>

        <form action="" className="login_form">
          <fieldset className="fieldset_border_none">
            <input className="input_name" type="email" placeholder="Email" aria-label="Input Email" onChange={(e) => setEmail(e.target.value)} required />

            <div className="password_box">
              <input className="input_password" type={passwordType} placeholder="Password" aria-label="Input Password" onChange={(e) => setInputPassword(e.target.value)} required />
              {passwordType === 'password'
                ? (
                  <figure className="eyebox">
                    <button className="password_display" type="button" onClick={() => setPasswordType('text')}>
                      <img src={eyeImg} alt="" />
                    </button>
                  </figure>
                )
                : (
                  <figure className="eyebox">
                    <button className="password_display" type="button" onClick={() => setPasswordType('password')}>
                      <img src={eyeImg} alt="" />
                    </button>
                  </figure>
                )}

            </div>
          </fieldset>

          <fieldset className="fieldset_border_none login_action">
            <button type="button" onClick={handleLogin}>Submit</button>
          </fieldset>
        </form>

        <div className="login_main_div">
          <p>
            {' '}
            <Link className="td_none" to="/register"> need an account? </Link>
            {' '}
          </p>

          <button type="button">
            <Link className="td_none" to="/forgot"> Forgot password </Link>
          </button>
        </div>

      </main>

      <footer className="login_footer">
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

export default LoginPage;
