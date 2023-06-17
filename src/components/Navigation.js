import React, { useState } from 'react';
import '../css/Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import '../css/LoginPage.css';


function Navigation() {
    const [isToggled, setIsToggled] = useState(true);

    return (
    <main>
        <section className="home_nav_section">

        <header className="home_logo">
            <figure>
            <Link to="/homepage" className="td_none">
                <img src={logoImg} alt="" />
            </Link>
            </figure>
        </header>

        <nav className="list_style_none home_nav">
        <li>
            {' '}
            <NavLink to="/homepage" activeClassName="active" className="td_none">HOME</NavLink>
        </li>
        <li>
            {' '}
            <NavLink to="/appointments" activeClassName="active" className="td_none">APPOINTMENTS</NavLink>
        </li>
        <li>
            {' '}
            <NavLink to="/book" activeClassName="active" className="td_none">NEW APPOINTMENT</NavLink>
        </li>
        <li>
            {' '}
            <NavLink to="/newtherapist" activeClassName="active" className="td_none">NEW THERAPIST</NavLink>
        </li>
        <li>
            {' '}
            <NavLink to="/deletetherapist" className="td_none" activeClassName="active">DELETE THERAPIST</NavLink>
        </li>
        <li>
            <button className="logout_btn" type="button">LOGOUT</button>
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

        <section className={isToggled ? 'home_nav_section_mobile' : 'active_blur home_nav_section_mobile'}>
        {isToggled && (
        <header className="home_logo margin_left1">
        <button onClick={() => setIsToggled(!isToggled)} type="button" aria-label="button">
            <img src={menuImg} alt="" />
        </button>
        </header>
        )}

        {!isToggled && (
        <header className="home_logo close_btn margin_left2">
        <button onClick={() => setIsToggled(!isToggled)} type="button" aria-label="button">
            <img src={cancelImg} alt="" />
        </button>
        </header>
        )}

        {!isToggled && (
        <nav className="list_style_none home_nav">
            <li>
            {' '}
            <NavLink to="/homepage" activeClassName="active" className="td_none">HOME</NavLink>
            </li>

            <li>
            {' '}
            <NavLink to="/" activeClassName="active" className="td_none">APPOINTMENTS</NavLink>
            </li>

            <li>
            {' '}
            <NavLink to="/" activeClassName="active" className="td_none">NEW APPOINTMENT</NavLink>
            </li>

            <li>
            {' '}
            <NavLink to="/newtherapist" activeClassName="active" className="td_none">NEW THERAPIST</NavLink>
            </li>
