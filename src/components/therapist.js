import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import '../css/Therapist.css';


function Therapists() {
    // This component recieves prop from either home or delete and do their bidding
  
    // const handleDeleteTherapist = (objId) => {
    //   return objId
    //  // dispatch(deleteTherapist(objId));
    // };
  
    return (
  
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