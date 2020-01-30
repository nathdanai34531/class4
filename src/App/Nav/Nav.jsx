import React, { useState, useEffect } from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    const [showMenu, updateShowMenu] = useState(false);

    const handleHamClick = () => {
        console.log('Ham click');

        if (showMenu === false) {
            updateShowMenu(true);
        } else {
            updateShowMenu(false);
        }

    }


    const handleWindowResize = () => {
        if (window.innerWidth > 599) {
            updateShowMenu(true);
        } else {
            updateShowMenu(false);
        }
    }



    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();
    }, []);




    return (
        <nav className='Nav'>


            <div className="hamburger" onClick={handleHamClick}>
                <FontAwesomeIcon icon={faBars} />

            </div>

            {
                showMenu &&
                <div className="links">
                    <NavLink to='/' exact> Welcome</NavLink>
                    <NavLink to='/services'> Services </NavLink>
                    <NavLink to='/contact'> Contact </NavLink>

                 </div>
            }
        </nav>

    )


};

export default Nav;













