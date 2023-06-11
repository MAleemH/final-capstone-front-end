import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/RegisterPage.css';
import backImg from '../img/back.png';
import eyeImg from '../img/eye.png';
import fadingBreak from '../img/fading_break.png';
import logoImg from '../img/logo.png';

function RegisterPage() {
  const [passwordType1, setPasswordType1] = useState('password');
  const [passwordType2, setPasswordType2] = useState('password');

  return (
    <div className="register_body">

      <header className="register_header">
        <nav>
          <Link to="/">
            <img src={backImg} alt="" />
          </Link>
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
          <p> &nbsp; Register with &nbsp; </p>
          <figure>
            {' '}
            <img className="rotate_breakline" src={fadingBreak} alt="" />
            {' '}
          </figure>
        </div>

        <form action="" className="register_form">
          <fieldset className="fieldset_border_none">
            <input className="input_name" type="text" placeholder="Username" required />

            <input className="input_name" type="email" placeholder="Email" required />

            <div className="password_box">
              <input className="input_password" type={passwordType1} placeholder="Password" required />
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
              <input className="input_password" type={passwordType2} placeholder="Re-enter Password" required />
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

          <fieldset className="fieldset_border_none register_action">
            <button type="button">Submit</button>
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
