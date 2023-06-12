import React from 'react';
import Navigation from '../components/Navigation';
// import { Link } from 'react-router-dom';
// import Navigation from '../components/Navigation';
import '../css/TherapistDetailsPage.css';
import therapistImg from '../img/therapist.jpg';
// import facebookImg from '../img/facebook.png';
// import twitterImg from '../img/twitter.png';
// import linkedinImg from '../img/linkedin.png';

function TherapistDetailsPage() {
  return (
    <main className="therapy_details_main">
      <section className="therapy_details_nav">
        <Navigation />
      </section>
      <section className="therapy_details_content">
        <article>
          <figure>
            <img src={therapistImg} alt="" />
          </figure>

          <div>
            <h1>MARCUS DAVID</h1>
            <p>Lorem ipsum dolor sit.</p>

            <ul>

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
            </ul>

          </div>
        </article>
      </section>
    </main>
  );
}

export default TherapistDetailsPage;
