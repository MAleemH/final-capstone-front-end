import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import '../css/Therapist.css';
import facebookImg from '../img/facebook.png';
import twitterImg from '../img/twitter.png';
import linkedinImg from '../img/linkedin.png';
import trashImg from '../img/trash.png';
import { deleteTherapist } from '../redux/Therapy/therapySlice';

function Therapists(props) {
  const { myTherapists } = props;
  const dispatch = useDispatch();
  // const { myTherapists } = props;
  // This component recieves prop from either home or delete and do their bidding

  const handleDeleteTherapist = async (e, objId) => {
    e.preventDefault();
    console.log(objId);
    await dispatch(deleteTherapist(objId));
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

              <div className="home_page_socials">
                <figure className="home_page_social_icons">
                  <button type="button" onClick={(e) => handleDeleteTherapist(e, therapist.id)}>
                    <img src={trashImg} alt="" />
                  </button>
                </figure>
              </div>

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
