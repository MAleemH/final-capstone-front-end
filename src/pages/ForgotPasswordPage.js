import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ForgotPasswordPage.css';
import backImg from '../img/back.png';
import fadingBreak from '../img/fading_break.png';
import logoImg from '../img/logo.png';

function ForgotPasswordPage() {
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
          <p>&nbsp; Forgot Password &nbsp; </p>
          <figure>
            {' '}
            <img className="rotate_breakline" src={fadingBreak} alt="" />
            {' '}
          </figure>
        </div>

        <form action="" className="login_form">
          <fieldset className="fieldset_border_none">
            <input className="input_name" type="email" placeholder="Email" aria-label="Input Email" required />
          </fieldset>

          <fieldset className="fieldset_border_none login_action">
            <button type="button">Submit</button>
          </fieldset>
        </form>

        <div className="login_main_div">
          <p>
            {' '}
            <Link className="td_none" to="/register"> need an account? </Link>
            {' '}
          </p>

          <button type="button">
            <Link className="td_none" to="/login"> Login </Link>
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

export default ForgotPasswordPage;
