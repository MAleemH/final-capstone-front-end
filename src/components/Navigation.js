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