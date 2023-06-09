/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTherapist, fetchSingleTherapist, fetchTherapists } from '../redux/Therapy/therapySlice';
import { fetchReserves } from '../redux/Reserve/reserveSlice';
import Navigation from '../components/Navigation';
import Loadeer from '../components/Loadeer';
import '../css/TherapistDetails.css';
import editImg from '../img/edit.png';
import trashImg from '../img/trash.png';
import { getLocalUser } from '../components/localStore';

const TherapistDetailsPage = () => {
  const myUse = getLocalUser() || [];
  const myUser = myUse?.user;
  const dispatch = useDispatch();
  const mysingleTherapist = useSelector((state) => state.therapy);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDeleteTherapist = async (e, objId) => {
    e.preventDefault();
    await dispatch(deleteTherapist(objId));
    dispatch(fetchTherapists());
    await dispatch(fetchReserves());
    setTimeout(() => {
      navigate('/homepage');
    }, 2000);
  };

  useEffect(() => {
    let active = true;
    (async () => {
      if (active) {
        dispatch(fetchSingleTherapist(id));
      }
    })();
    return () => {
      active = false;
    };
  }, [dispatch, id]);

  return (
    <main className="therapy_details_main">

      <section className="therapy_details_nav">
        <Navigation />
      </section>
      {mysingleTherapist.loading ? (
        <section className="therapy_details_content">
          <Loadeer />
        </section>
      )

        : (
          <section className="therapy_details_content">
            {mysingleTherapist.singleTherapist && (
            <article key={mysingleTherapist.singleTherapist.id}>

              <div className="therapy_details_figure_box">
                <img src={mysingleTherapist.singleTherapist.photo} alt="" />
              </div>

              <div className="therapist_info_box">
                <div className="therapist_info_contact_name">
                  <h1>{mysingleTherapist.singleTherapist.name}</h1>
                  <p>
                    Honoured to be your&nbsp;
                    {mysingleTherapist.singleTherapist.specialization}
                    {' '}
                    therapist
                  </p>
                </div>

                <ul className="list_style_none">

                  <li>
                    <p>RATING</p>
                    <p>4</p>
                  </li>
                  <li>
                    <p>SPECIALTY</p>
                    <p>{mysingleTherapist.singleTherapist.specialization}</p>
                  </li>
                  <li>
                    <p>LOCATION</p>
                    <p>{mysingleTherapist.singleTherapist.address}</p>
                  </li>
                  <li>
                    <p>EMAIL</p>
                    <p>{mysingleTherapist.singleTherapist.email}</p>
                  </li>
                  <li>
                    <p>AVAILABILITY</p>
                    <p>{`${mysingleTherapist.singleTherapist.availability || 'Not Available'}`}</p>
                  </li>
                  <li>
                    <p>PHONE</p>
                    <p>{mysingleTherapist.singleTherapist.phone}</p>
                  </li>
                </ul>

                <div className="therapist_info_action">
                  <button aria-label="Book" type="button"><Link className="td_none" to="/book">Reserve</Link></button>
                  <button aria-label="Edit" type="button"><img src={editImg} alt="" /></button>
                  {myUser?.role === 'admin' && (
                  <button aria-label="Trash button" type="button" onClick={(e) => handleDeleteTherapist(e, mysingleTherapist.singleTherapist.id)}><img src={trashImg} alt="" /></button>
                  )}
                </div>

              </div>

            </article>
            )}

          </section>
        )}

    </main>
  );
};

export default TherapistDetailsPage;
