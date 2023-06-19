/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTherapist, fetchSingleTherapist } from '../redux/Therapy/therapySlice';
import Navigation from '../components/Navigation';
import '../css/TherapistDetails.css';
import editImg from '../img/edit.png';
import trashImg from '../img/trash.png';

function TherapistDetailsPage() {
  const dispatch = useDispatch();
  const mysingleTherapist = useSelector((state) => state.therapy.singleTherapist);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDeleteTherapist = async (e, objId) => {
    e.preventDefault();
    dispatch(deleteTherapist(objId));
    setTimeout(() => {
      navigate('/homepage');
    }, 2000);
  };

  useEffect(() => {
    let active = true;
    (async () => {
      if (active && !mysingleTherapist) {
        dispatch(fetchSingleTherapist(id));
        console.log(mysingleTherapist);
      }
    })();
    return () => {
      active = false;
    };
  }, [dispatch, mysingleTherapist, id]);

  return (
    <main className="therapy_details_main">

      <section className="therapy_details_nav">
        <Navigation />
      </section>

      <section className="therapy_details_content">
        {mysingleTherapist && (
          <article key={mysingleTherapist.id}>

            <div className="therapy_details_figure_box">
              <img src={mysingleTherapist.photo} alt="" />
            </div>

            <div className="therapist_info_box">
              <div className="therapist_info_contact_name">
                <h1>{mysingleTherapist.name}</h1>
                <p>
                  Honoured to be your&nbsp;
                  {mysingleTherapist.specialization}
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
                  <p>{mysingleTherapist.specialization}</p>
                </li>
                <li>
                  <p>LOCATION</p>
                  <p>{mysingleTherapist.address}</p>
                </li>
                <li>
                  <p>EMAIL</p>
                  <p>{mysingleTherapist.email}</p>
                </li>
                <li>
                  <p>AVAILABILITY</p>
                  <p>{`${mysingleTherapist.availability || 'Not Available'}`}</p>
                </li>
                <li>
                  <p>PHONE</p>
                  <p>{mysingleTherapist.phone}</p>
                </li>
              </ul>

              <div className="therapist_info_action">
                <button aria-label="Book" type="button"><Link className="td_none" to="/book">Reserve</Link></button>
                <button aria-label="Edit" type="button"><img src={editImg} alt="" /></button>
                <button aria-label="Trash" type="button" onClick={(e) => handleDeleteTherapist(e, mysingleTherapist.id)}><img src={trashImg} alt="" /></button>
              </div>

            </div>

          </article>
        )}

      </section>

    </main>
  );
}

export default TherapistDetailsPage;
