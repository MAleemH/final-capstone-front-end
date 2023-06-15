import React from 'react';
// import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import specializationArr from './specialization';
import '../css/Therapist.css';
import therapistImg from '../img/therapist.jpg';
import facebookImg from '../img/facebook.png';
import twitterImg from '../img/twitter.png';
import linkedinImg from '../img/linkedin.png';
import trashImg from '../img/trash.png';

function Therapists() {
  const [inputName, setInputName] = useState('');
  const [inputSpecialty, setInputSpecialty] = useState('');
  const filteredTherapists = [];
  const myTherapists = useSelector((state) => state.therapy.therapists);
  const dispatch = useDispatch();

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

  const user = { role: 'Admin' };
  if (user.role = 'Admin') {
    filteredTherapists = myTherapists.filter(
      (therapist) => therapist.name.toLowerCase().includes(inputName.toLowerCase()),
    );
  } else {
    filteredTherapists = myTherapists.filter(
      (therapist) => therapist.specialization.toLowerCase().includes(inputSpecialty.toLowerCase()),
    );
  }

  return (
    <div className="therapy_wrap">
      {/* <section className="home_page_content"> */}
      <header>
        <h1>Starred Therapists</h1>

        <p className="hide1">Please select a therapist</p>

        <div className="search_box">
          <fieldset className="fieldset_border_none">
            <select aria-label="Input Label" className="input_name" id="specializationId" onChange={(e) => setInputSpecialty(e.target.value)}>

              {specializationArr.map((specialty) => (
                <option key={specialty} value={specialty.value} aria-label="Input Specialization">{specialty.name}</option>
              ))}
            </select>
          </fieldset>
        </div>

        <div className="search_box">
          <fieldset className="fieldset_border_none">
            {/* onChange={(e) => setInputName(e.target.value)} */}
            <input className="input_name" aria-label="Input Name" type="text" placeholder="Search by name" onChange={(e) => setInputName(e.target.value)} />
          </fieldset>
        </div>
      </header>

      <div className="home_grids">

        <div className="home_grids_box">
          <Link className="td_none" to="/therapistdetails">
            <article>
              <figure className="therapy_figure">
                <img src={therapistImg} alt="" />
              </figure>

              <h4>MARCUS DAVID</h4>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

              <div className="home_page_socials">
                <figure className="home_page_social_icons">
                  <Link to="/" className="td_none">
                    <img src={facebookImg} alt="" />
                  </Link>
                </figure>

                <figure className="home_page_social_icons">
                  <Link to="/" className="td_none">
                    <img src={twitterImg} alt="" />
                  </Link>
                </figure>

                <figure className="home_page_social_icons">
                  <Link to="/" className="td_none">
                    <img src={linkedinImg} alt="" />
                  </Link>
                </figure>
              </div>

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
        <div className="home_grids_box">
          <Link className="td_none" to="/therapistdetails">
            <article>
              <figure className="therapy_figure">
                <img src={therapistImg} alt="" />
              </figure>

              <h4>MARCUS DAVID</h4>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

              <div className="home_page_socials">
                <figure className="home_page_social_icons">
                  <Link to="/" className="td_none">
                    <img src={facebookImg} alt="" />
                  </Link>
                </figure>

                <figure className="home_page_social_icons">
                  <Link to="/" className="td_none">
                    <img src={twitterImg} alt="" />
                  </Link>
                </figure>

                <figure className="home_page_social_icons">
                  <Link to="/" className="td_none">
                    <img src={linkedinImg} alt="" />
                  </Link>
                </figure>
              </div>

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
        <div className="home_grids_box">
          <Link className="td_none" to="/therapistdetails">
            <article>
              <figure className="therapy_figure">
                <img src={therapistImg} alt="" />
              </figure>

              <h4>MARCUS DAVID</h4>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

              <div className="home_page_socials">
                <figure className="home_page_social_icons">
                  <Link to="/" className="td_none">
                    <img src={facebookImg} alt="" />
                  </Link>
                </figure>

                <figure className="home_page_social_icons">
                  <Link to="/" className="td_none">
                    <img src={twitterImg} alt="" />
                  </Link>
                </figure>

                <figure className="home_page_social_icons">
                  <Link to="/" className="td_none">
                    <img src={linkedinImg} alt="" />
                  </Link>
                </figure>
              </div>

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
        <div className="home_grids_box">
          <Link className="td_none" to="/therapistdetails">
            <article>
              <figure className="therapy_figure">
                <img src={therapistImg} alt="" />
              </figure>

              <h4>MARCUS DAVID</h4>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

              <div className="home_page_socials">
                <figure className="home_page_social_icons">
                  <Link to="/" className="td_none">
                    <img src={facebookImg} alt="" />
                  </Link>
                </figure>

                <figure className="home_page_social_icons">
                  <Link to="/" className="td_none">
                    <img src={twitterImg} alt="" />
                  </Link>
                </figure>

                <figure className="home_page_social_icons">
                  <Link to="/" className="td_none">
                    <img src={linkedinImg} alt="" />
                  </Link>
                </figure>
              </div>

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
        <div className="home_grids_box">
          <Link className="td_none" to="/therapistdetails">
            <article>
              <figure className="therapy_figure">
                <img src={therapistImg} alt="" />
              </figure>

              <h4>MARCUS DAVID</h4>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

              <div className="home_page_socials">
                <figure className="home_page_social_icons">
                  <Link to="/" className="td_none">
                    <img src={facebookImg} alt="" />
                  </Link>
                </figure>

                <figure className="home_page_social_icons">
                  <Link to="/" className="td_none">
                    <img src={twitterImg} alt="" />
                  </Link>
                </figure>

                <figure className="home_page_social_icons">
                  <Link to="/" className="td_none">
                    <img src={linkedinImg} alt="" />
                  </Link>
                </figure>
              </div>

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
        <div className="home_grids_box">
          <Link className="td_none" to="/therapistdetails">
            <article>
              <figure className="therapy_figure">
                <img src={therapistImg} alt="" />
              </figure>

              <h4>MARCUS DAVID</h4>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

              <div className="home_page_socials">
                <figure className="home_page_social_icons">
                  <Link to="/" className="td_none">
                    <img src={facebookImg} alt="" />
                  </Link>
                </figure>

                <figure className="home_page_social_icons">
                  <Link to="/" className="td_none">
                    <img src={twitterImg} alt="" />
                  </Link>
                </figure>

                <figure className="home_page_social_icons">
                  <Link to="/" className="td_none">
                    <img src={linkedinImg} alt="" />
                  </Link>
                </figure>
              </div>

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

      {/* </section> */}
    </div>
  );
}

export default Therapists;