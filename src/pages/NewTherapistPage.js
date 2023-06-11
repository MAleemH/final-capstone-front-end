import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NewTherapistPage.css';
import backImg from '../img/back.png';
import fadingBreak from '../img/fading_break.png';
import logoImg from '../img/logo.png';

function NewTherapistPage() {
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
            <input className="input_name" type="text" placeholder="Name" required />

            <input className="input_name" type="text" placeholder="Address (State and City)" required />

            <input className="input_name" type="phone" placeholder="Phone" required />

            <input className="input_name" type="email" placeholder="Email" required />

          </fieldset>

          <fieldset className="fieldset_border_none new_therapist_action">
            <button type="button">Submit</button>
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
