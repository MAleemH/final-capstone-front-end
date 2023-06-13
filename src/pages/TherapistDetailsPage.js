import React from 'react';
import Navigation from '../components/Navigation';
// import { Link } from 'react-router-dom';
import '../css/TherapistDetails.css';
import therapistImg from '../img/therapist.jpg';

function TherapistDetailsPage() {
  return (
    <main className="therapy_details_main">

      <section className="therapy_details_nav">
        <Navigation />
      </section>

      <section className="therapy_details_content">
        <article>

          <div className="therapy_details_figure_box">
            <img src={therapistImg} alt="" />
          </div>

          <div className="therapist_info_box">
            <div className="therapist_info_contact_name">
              <h1>MARCUS DAVID</h1>
              <p>Lorem ipsum dolor sit.</p>
            </div>

            <ul className="list_style_none">

              <li>
                <p>RATING</p>
                <p>4</p>
              </li>
              <li>
                <p>SPECIALTY</p>
                <p>CARDIOVASCULAR</p>
              </li>
              <li>
                <p>LOCATION</p>
                <p>LAGOS</p>
              </li>
              <li>
                <p>EMAIL</p>
                <p>johndoe@yahoo.com</p>
              </li>
              <li>
                <p>AVAILABILITY</p>
                <p>TRUE</p>
              </li>
              <li>
                <p>PHONE</p>
                <p>07054245454</p>
              </li>
            </ul>

          </div>

        </article>
      </section>

    </main>
  );
}

export default TherapistDetailsPage;
