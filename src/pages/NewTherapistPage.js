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
            <input className="input_name" type="text" placeholder="Name" aria-label="Input Name" required />

            <input className="input_name" type="text" placeholder="Address (State and City)" aria-label="Input Address" required />

            <input className="input_name" type="phone" placeholder="Phone" aria-label="Input Phone" required />

            <input className="input_name" type="email" placeholder="Email" aria-label="Input Email" required />

            <select aria-label="Input Label" className="input_name" id="specializationId">
              <option aria-label="Input Specialization" value="">Select Specialization</option>
              <option value="option2" aria-label="Input Specialization">Option 1</option>
              <option value="option3" aria-label="Input Specialization">Option 2</option>
            </select>

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
