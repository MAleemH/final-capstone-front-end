import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReserve } from '../redux/Reserve/reserveSlice';
import Navigation from '../components/Navigation';
import '../css/AppointmentPage.css';
import therapistImg from '../img/therapist.jpg';

function AppointmentPage() {
  const myReserves = useSelector((state) => state.reserve.reserves);
  const dispatch = useDispatch();

  useEffect(() => {
    let active = true;
    (async () => {
      if (active && myReserves?.length === 0) {
        dispatch(fetchReserve());
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
          {/* {myReserves.map((myReserve) => ())} */}
          <div className="home_grids_box">
            <article>
              <figure className="therapy_figure">
                <img src={therapistImg} alt="" />
              </figure>

              <h4>MARCUS DAVID</h4>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

              <div className="appointment_socials">
                <p>Date</p>
              </div>
            </article>
          </div>

          <div className="home_grids_box">
            <article>
              <figure className="therapy_figure">
                <img src={therapistImg} alt="" />
              </figure>

              <h4>MARCUS DAVID</h4>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

              <div className="appointment_socials">
                <p>Date</p>
              </div>
            </article>
          </div>

          <div className="home_grids_box">
            <article>
              <figure className="therapy_figure">
                <img src={therapistImg} alt="" />
              </figure>

              <h4>MARCUS DAVID</h4>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

              <div className="appointment_socials">
                <p>Date</p>
              </div>
            </article>
          </div>

        </div>

      </section>

    </main>
  );
}

export default AppointmentPage;
