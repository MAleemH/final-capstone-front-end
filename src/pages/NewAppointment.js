import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { postReserve } from '../redux/Reserve/reserveSlice';
import '../css/NewAppointment.css';
import specializationArr from '../components/specialization';
import backImg from '../img/back.png';
import fadingBreak from '../img/fading_break.png';
import logoImg from '../img/logo.png';

function NewAppointment() {
  // const dispatch = useDispatch();
  const [address, setAddress] = useState('');
  const [timestampp, setTimestampp] = useState(0);
  const [specialty, setSpecialty] = useState('');
  const [therapist, setTherapist] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const nullReserveData = async () => {
    setAddress('');
    setTimestampp('');
    setSpecialty('');
    setTherapist({});
  };

  const handleNewAppointment = async () => {
    const timestamp = (new Date(timestampp)).toISOString().substr(0, 16);
    console.log(address, timestamp, therapist);
    const userData = {
      address, date: timestamp, therapist,
    };
    console.log(userData);
    // dispatch(postReserve(userData))
    await nullReserveData();
    navigate('appointments');
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
    <div className="new_appointment_body">

      <header className="new_appointment_header">
        <nav>
          <button className="back_none" type="button" onClick={goBack}>
            <img src={backImg} alt="" />
          </button>
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
          <p>
            &nbsp;
            {`${errorMessage || 'Reserve'}`}
              &nbsp;
          </p>
          <figure>
            {' '}
            <img className="rotate_breakline" src={fadingBreak} alt="" />
            {' '}
          </figure>
        </div>

        <form action="" className="new_appointment_form">
          <fieldset className="fieldset_border_none">

            <input className="input_name" type="text" placeholder="Address (State and City)" aria-label="Input Address" value={address} onChange={(e) => setAddress(e.target.value)} required />

            <input className="input_name" type="datetime-local" placeholder="Time" aria-label="Input Date and Time" value={timestampp.name} onChange={(e) => setTimestampp(e.target.value)} required />

            <select aria-label="Input Label" className="input_name" id="specializationId" value={specialty.name} onChange={(e) => setSpecialty(e.target.value)}>
              {specializationArr.map((specialty) => (
                <option key={specialty.id} value={specialty.value} aria-label="Input Specialization">{specialty.name}</option>
              ))}
            </select>

            <select aria-label="Input Label" className="input_name" id="therapistId" value={therapist.name} onChange={(e) => setTherapist(e.target.value)}>
              {/* Filter based on specialty choosen to display doctors in the specialty */}
              <option value="" aria-label="Input Therapist">Therapist Name</option>
              {/* ))} */}
            </select>

          </fieldset>

          <fieldset className="fieldset_border_none new_appointment_action">
            <button type="button" onClick={handleNewAppointment}> Book</button>
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
