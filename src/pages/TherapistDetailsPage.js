import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchReserves } from '../redux/Reserve/reserveSlice';
import Navigation from '../components/Navigation';
import '../css/TherapistDetails.css';
import therapistImg from '../img/therapist.jpg';
import editImg from '../img/edit.png';
import trashImg from '../img/trash.png';

function TherapistDetailsPage() {
  const dispatch = useDispatch();
  //  const myReserves = useSelector((state) => state.reserve.reserves);
  //  const { id } = useParams();
  //  const myReserve = (myReserves.filter((myReserve) => myReserve.id === id));

  useEffect(() => {
    let active = true;
    (async () => {
      if (active) {
        dispatch(fetchReserves());
      }
    })();
    return () => {
      active = false;
    };
  }, [dispatch]);

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

            <div className="therapist_info_action">
              <button aria-label="Book" type="button"><Link className="td_none" to="/book">Reserve</Link></button>
              <button aria-label="Edit" type="button"><img src={editImg} alt="" /></button>
              <button aria-label="Trash" type="button"><img src={trashImg} alt="" /></button>
            </div>

          </div>

        </article>
      </section>

    </main>
  );
}

export default TherapistDetailsPage;
