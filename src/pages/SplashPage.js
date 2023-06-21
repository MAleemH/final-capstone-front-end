import React from 'react';
import { Link } from 'react-router-dom';
import '../css/SplashPage.css';
import SplashImage from '../img/land_image.jpg';

const SplashPage = () => {
  const SplashImageStyle = {
    backgroundImage: `url(${SplashImage})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    margin: 'auto',
    height: '85vh',
  };

  return (
    <div className="land_body">

      <main className="land_main" style={SplashImageStyle} />

      <footer className="land_main_footer">
        <fieldset className="fieldset_border_none">
          <button type="button" className="land_btn1">
            {' '}
            <Link to="/login" className="td_none"> LOGIN </Link>
            {' '}
          </button>

        </fieldset>

        <fieldset className="fieldset_border_none">
          <button type="button" className="land_btn1"><Link to="/register" className="td_none"> REGISTER </Link></button>
        </fieldset>
      </footer>
    </div>
  );
};

export default SplashPage;
