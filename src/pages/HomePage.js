import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTherapists } from '../redux/Therapy/therapySlice';
import Navigation from '../components/Navigation';
import specializationArr from '../components/specialization';
import '../css/HomePage.css';
import Therapists from '../components/Therapists';

function HomePage() {
  const myTherapists = useSelector((state) => state.therapy.therapists);
  console.log(myTherapists);
  const dispatch = useDispatch();
  const [specialty, setSpecialty] = useState('');
  console.log(myTherapists, specialty);
  console.log(myTherapists);

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
    <main className="home_page_main">
      <section className="home_page_nav">
        <Navigation />
      </section>

      <section className="home_page_content">
        <header>
          <h1>Starred Therapists</h1>

          <p className="hide1">Please select a therapist</p>

          <div className="search_box">
            <fieldset className="fieldset_border_none">
              <select aria-label="Input Label" className="input_name" onChange={(e) => setSpecialty(e.target.value)} id="specializationId">

                {specializationArr.map((specialty) => (
                  <option key={specialty} value={specialty.value} aria-label="Input Specialization">{specialty.name}</option>
                ))}
              </select>
            </fieldset>
          </div>
        </header>

        <div>
          <Therapists myTherapists={myTherapists} />
        </div>

      </section>

    </main>
  );
}

export default HomePage;
