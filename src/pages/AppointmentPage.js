import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReserves } from '../redux/Reserve/reserveSlice';
import Navigation from '../components/Navigation';
import '../css/AppointmentPage.css';

const AppointmentPage = () => {
  const myReserves = useSelector((state) => state.reserve.reserves);
  const dispatch = useDispatch();

  useEffect(() => {
    let active = true;
    (async () => {
      if (active && myReserves) {
        dispatch(fetchReserves());
      }
    })();
    return () => {
      active = false;
    };
  }, [dispatch, myReserves]);

  return (
    <main className="appointment_main">
      <section className="appointment_nav">
        <Navigation />
      </section>

      <section className="appointment_content">
        <header>
          <h1>Appointments</h1>

          <p className="hide1">View all appointments</p>

        </header>

        <div className="home_grids">
          {myReserves?.map((myReserve) => (
            <div className="home_grids_box" key={myReserve.id}>
              <article>
                {/* Therapist to see */}
                <figure className="therapy_figure">
                  <img src={myReserve?.therapist.photo || ''} alt="" />
                </figure>

                <h4>{myReserve.status}</h4>

                <p>{myReserve.date?.replace('T', ' ')}</p>

                <div className="appointment_socials">
                  <p>{myReserve?.therapist.specialization}</p>
                </div>
              </article>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
};

export default AppointmentPage;
