import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTherapists } from '../redux/Therapy/therapySlice';
import Navigation from '../components/Navigation';
import '../css/DeleteTherapist.css';
import Therapists from '../components/Therapists';

const DeleteTherapist = () => {
  const myTherapists = useSelector((state) => state.therapy.therapists);
  const dispatch = useDispatch();
  const [inputName, setInputname] = useState('');

  const filteredTherapists = myTherapists.filter(
    (therapy) => therapy.name.toLowerCase().includes(inputName.toLowerCase()),
  );

  useEffect(() => {
    let active = true;
    (async () => {
      if (active && myTherapists.length === 0) {
        dispatch(fetchTherapists());
      }
    })();
    return () => {
      active = false;
    };
  }, [dispatch, myTherapists]);

  return (
    <main className="delete_page_main">
      <section className="delete_page_nav">
        <Navigation />
      </section>

      <section className="delete_page_content">
        <header>
          <h1>Starred Therapists</h1>

          <p className="hide1">Please select a therapist</p>

          <div className="search_box">
            <fieldset className="fieldset_border_none">
              <input className="input_name" type="text" placeholder="Search by name" aria-label="Input Name" value={inputName} onChange={(e) => setInputname(e.target.value)} required />
            </fieldset>
          </div>
        </header>

        <div>
          <Therapists myTherapists={filteredTherapists} />
        </div>

      </section>

    </main>
  );
};

export default DeleteTherapist;
