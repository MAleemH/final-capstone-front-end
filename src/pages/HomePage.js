import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import '../css/HomePage.css';
import therapistImg from '../img/therapist.jpg';

function HomePage() {
  return (
    <main className="home_page_main">
      <section className="home_page_nav">
        <Navigation />
      </section>

      <section className="home_page_content">
        <header>
          <h1>Starred Therapist</h1>

          <p>Please select a therapist</p>
        </header>

        <div className="home_grids">
          <div className="home_grids_box">
            <Link className="td_none" to="/register">
              <article>
                <figure className="therapy_figure">
                  <img src={therapistImg} alt="" />
                </figure>

                <h4>MARCUS DAVID</h4>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

                <figure>
                  <img src="./img/facebook.png" alt="" />
                  <img src="./img/twitter.png" alt="" />
                  <img src="./img/linkedin.png" alt="" />
                </figure>

              </article>
            </Link>
          </div>

          <div className="home_grids_box">
            <Link className="td_none" to="/register">
              <article>
                <figure className="therapy_figure">
                  <img src={therapistImg} alt="" />
                </figure>

                <h4>MARCUS DAVID</h4>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

                <figure>
                  <img src="./img/facebook.png" alt="" />
                  <img src="./img/twitter.png" alt="" />
                  <img src="./img/linkedin.png" alt="" />
                </figure>

              </article>
            </Link>
          </div>

          <div className="home_grids_box">
            <Link className="td_none" to="/register">
              <article>
                <figure className="therapy_figure">
                  <img src={therapistImg} alt="" />
                </figure>

                <h4>MARCUS DAVID</h4>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

                <figure>
                  <img src="./img/facebook.png" alt="" />
                  <img src="./img/twitter.png" alt="" />
                  <img src="./img/linkedin.png" alt="" />
                </figure>

              </article>
            </Link>
          </div>

        </div>

      </section>
    </main>
  );
}

export default HomePage;
