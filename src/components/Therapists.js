/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import '../css/Therapist.css';
import facebookImg from '../img/facebook.png';
import twitterImg from '../img/twitter.png';
import linkedinImg from '../img/linkedin.png';
import trashImg from '../img/trash.png';
import { deleteTherapist, fetchTherapists } from '../redux/Therapy/therapySlice';
import { getLocalUser } from './localStore';

function Therapists(props) {
  const myUse = getLocalUser() || [];
  const myUser = myUse?.user;
  const { myTherapists } = props;
  const dispatch = useDispatch();

  const handleDeleteTherapist = async (e, objId) => {
    e.preventDefault();
    await dispatch(deleteTherapist(objId));
    dispatch(fetchTherapists());
  };

  return (

    <div className="home_grids">

      {myTherapists?.map((therapist) => (
        <div key={therapist.id} className="home_grids_box">
          <Link to={`/therapistdetails/${therapist.id}`} className="td_none">
            <article>
              <figure className="therapy_figure">
                <img src={therapist.photo} alt="" />
              </figure>

              <h4>{therapist.name}</h4>

              <p>{therapist.specialization}</p>

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

              {myUser?.role === 'admin' && (
                <div className="home_page_socials">
                  <figure className="home_page_social_icons">
                    <button type="button" onClick={(e) => handleDeleteTherapist(e, therapist.id)}>
                      <img src={trashImg} alt="" />
                    </button>
                  </figure>
                </div>
              )}

            </article>
          </Link>
        </div>
      ))}

    </div>
  );
}

Therapists.propTypes = {
  myTherapists: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.object)).isRequired,
};

export default Therapists;
