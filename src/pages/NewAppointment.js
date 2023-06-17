import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postReserve } from '../redux/Reserve/reserveSlice';
import '../css/NewAppointment.css';
import specializationArr from '../components/speciliazation';
import backImg from '../img/back.png';
import fadingBreak from '../img/fading_break.png';
import logoImg from '../img/logo.png';

function NewAppointment() {
  const dispatch = useDispatch();
  const [inputName] = useState('');
  const [inputAddress] = useState('');

  const handleSubmit = async () => {
    const dataToSend = {
      name: inputName,
      address: inputAddress,
      // Add other form data fields as needed
    };
    // Send the data to your database
    const response = await dispatch(postReserve(dataToSend));
    console.log(response);
  };

  return (
    <div className="new_appointment_body">

      <header className="new_appointment_header">
        <nav>
          <Link to="/">
            <img src={backImg} alt="" />
          </Link>
        </nav>
      </header>

      <main className="new_appointment_main">
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
          <p> &nbsp; Reserve &nbsp; </p>
          <figure>
            {' '}
            <img className="rotate_breakline" src={fadingBreak} alt="" />
            {' '}
          </figure>
        </div>

        <form action="" className="new_appointment_form">
          <fieldset className="fieldset_border_none">

            <input className="input_name" type="text" placeholder="Address (State and City)" aria-label="Input Address" required />

            <input className="input_name" type="datetime-local" placeholder="Time" aria-label="Input Date and Time" required />

            <select aria-label="Input Label" className="input_name" id="specializationId">
              {specializationArr.map((specialty) => (
                <option key={specialty} value={specialty.value} aria-label="Input Specialization">{specialty.name}</option>
              ))}
            </select>

            <select aria-label="Input Label" className="input_name" id="therapistId">
              {/* Filter based on specialty choosen to display doctors in the specialty */}
              <option value="" aria-label="Input Therapist">Therapist Name</option>
              {/* ))} */}
            </select>

          </fieldset>

          <fieldset className="fieldset_border_none new_appointment_action">
            <button type="button" onClick={handleSubmit}> Book</button>
          </fieldset>
        </form>

      </main>

      <footer className="new_appointment_footer">
        <ul className="list_style_none">
          <li><Link to="/new_appointment" className="td_none"> terms </Link></li>
          <li><Link to="/new_appointment" className="td_none">  privacy </Link></li>
        </ul>
      </footer>

    </div>
  );
}

export default NewAppointment;
