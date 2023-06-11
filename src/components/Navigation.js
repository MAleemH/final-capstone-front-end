import React from 'react';
import '../css/Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import '../css/LoginPage.css';
import facebookImg from '../img/facebook.png';
import twitterImg from '../img/twitter.png';
import linkedinImg from '../img/linkedin.png';
import instagramImg from '../img/instagram.png';
import snapchatImg from '../img/snapchat.png';
import logoImg from '../img/logo.png';

function Navigation() {
  return (
    <main>
      <section className="home_nav_section">
        <header className="home_logo">
          <figure><img src={logoImg} alt="" /></figure>
        </header>

        <nav className="list_style_none home_nav">
          <li>
            {' '}
            <NavLink to="/navigation" activeClassName="active" className="td_none">MODELS</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="/" activeClassName="active" className="td_none">LIFESTYLE</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="/" activeClassName="active" className="td_none">SHOP</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="/" activeClassName="active" className="td_none">TEST DRIVE</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="/" activeClassName="active" className="td_none">NEW THERAPIST</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="/" activeClassName="active" className="td_none">MODELS</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="/" activeClassName="active" className="td_none">LIFESTYLE</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="/" activeClassName="active" className="td_none">SHOP</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="/" activeClassName="active" className="td_none">TEST DRIVE</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="/" activeClassName="active" className="td_none">NEW THERAPIST</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="/" activeClassName="active" className="td_none">MODELS</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="/" activeClassName="active" className="td_none">LIFESTYLE</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="/" activeClassName="active" className="td_none">SHOP</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="/" activeClassName="active" className="td_none">TEST DRIVE</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="/" activeClassName="active" className="td_none">NEW THERAPIST</NavLink>
          </li>
        </nav>

        <footer className="home_nav_footer">

          <figure className="nav_social_icons">
            <Link to="/" className="td_none">
              <img src={facebookImg} alt="" />
            </Link>
          </figure>

          <figure className="nav_social_icons">
            <Link to="/" className="td_none">
              <img src={twitterImg} alt="" />
            </Link>
          </figure>

          <figure className="nav_social_icons">
            <Link to="/" className="td_none">
              <img src={linkedinImg} alt="" />
            </Link>
          </figure>

          <figure className="nav_social_icons">
            <Link to="/" className="td_none">
              <img src={instagramImg} alt="" />
            </Link>
          </figure>

          <figure className="nav_social_icons">
            <Link to="/" className="td_none">
              <img src={snapchatImg} alt="" />
            </Link>
          </figure>

        </footer>

      </section>

    </main>
  );
}

export default Navigation;
