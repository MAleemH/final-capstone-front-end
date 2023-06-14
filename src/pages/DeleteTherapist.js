import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import '../css/DeleteTherapist.css';
import therapistImg from '../img/therapist.jpg';
import trashImg from '../img/trash.png';

function DeleteTherapist() {
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
              <input className="input_name" aria-label="Input Name" type="text" placeholder="Search by name" />
            </fieldset>
          </div>
        </header>

        <div className="delete_grids">

          <div className="delete_grids_box">
            <Link className="td_none" to="/therapistdetails">
              <article>
                <figure className="therapy_figure">
                  <img src={therapistImg} alt="" />
                </figure>

                <h4>MARCUS DAVID</h4>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

                <div className="delete_page_socials">
                  <figure className="delete_page_social_icons">
                    <button type="button">
                      <img src={trashImg} alt="" />
                    </button>
                  </figure>
                </div>

              </article>
            </Link>
          </div>

          <div className="delete_grids_box">
            <Link className="td_none" to="/therapistdetails">
              <article>
                <figure className="therapy_figure">
                  <img src={therapistImg} alt="" />
                </figure>

                <h4>MARCUS DAVID</h4>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

                <div className="delete_page_socials">
                  <figure className="delete_page_social_icons">
                    <button type="button">
                      <img src={trashImg} alt="" />
                    </button>
                  </figure>
                </div>

              </article>
            </Link>
          </div>

          <div className="delete_grids_box">
            <Link className="td_none" to="/therapistdetails">
              <article>
                <figure className="therapy_figure">
                  <img src={therapistImg} alt="" />
                </figure>

                <h4>MARCUS DAVID</h4>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

                <div className="delete_page_socials">
                  <figure className="delete_page_social_icons">
                    <button type="button">
                      <img src={trashImg} alt="" />
                    </button>
                  </figure>
                </div>

              </article>
            </Link>
          </div>

          <div className="delete_grids_box">
            <Link className="td_none" to="/therapistdetails">
              <article>
                <figure className="therapy_figure">
                  <img src={therapistImg} alt="" />
                </figure>

                <h4>MARCUS DAVID</h4>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

                <div className="delete_page_socials">
                  <figure className="delete_page_social_icons">
                    <button type="button">
                      <img src={trashImg} alt="" />
                    </button>
                  </figure>
                </div>

              </article>
            </Link>
          </div>

          <div className="delete_grids_box">
            <Link className="td_none" to="/therapistdetails">
              <article>
                <figure className="therapy_figure">
                  <img src={therapistImg} alt="" />
                </figure>

                <h4>MARCUS DAVID</h4>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

                <div className="delete_page_socials">
                  <figure className="delete_page_social_icons">
                    <button type="button">
                      <img src={trashImg} alt="" />
                    </button>
                  </figure>
                </div>

              </article>
            </Link>
          </div>

          <div className="delete_grids_box">
            <Link className="td_none" to="/therapistdetails">
              <article>
                <figure className="therapy_figure">
                  <img src={therapistImg} alt="" />
                </figure>

                <h4>MARCUS DAVID</h4>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

                <div className="delete_page_socials">
                  <figure className="delete_page_social_icons">
                    <button type="button">
                      <img src={trashImg} alt="" />
                    </button>
                  </figure>
                </div>

              </article>
            </Link>
          </div>

        </div>

      </section>

    </main>
  );
}

export default DeleteTherapist;
