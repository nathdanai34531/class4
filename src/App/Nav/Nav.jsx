import React, { useState, useEffect } from 'react';
import './Nav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    //State
    const [showMenu, updateShowMenu] = useState(true);
    const [isSmall, updateIsSmall] = useState(true);


    //Function /Methods
    //Hamburger Click
    const handhamclick = () => {
        console.log('Youhitham');

        let newShowMenu;

        if (showMenu === true) {
            newShowMenu = false;
        } else {
            newShowMenu = true;
        }


        updateShowMenu(newShowMenu);
    }

    //Checking for Small view or Medium/Large
    const handleIsSmall = () => {
        console.log('How Wide Window: ', window.innerWidth, isSmall);

        let newValue;

        if (window.innerWidth > 599) {
            console.log('greater than')
            newValue = false;

        } else {
            console.log('less than')
            newValue = true;

        }
        console.log('newValue', newValue)
        updateIsSmall(newValue);

    }


    //useEffect
    useEffect(() => {

        window.addEventListener('resize', handleIsSmall)

    }, []);



    return (
        <nav className='Nav'>

            <button onClick={handleIsSmall}>Small me</button>

            <div className="hamburger" onClick={handhamclick}>
                <FontAwesomeIcon icon={faBars} />

            </div>

            {
                showMenu &&
                <div className="links">
                    <a href="#">Welcome</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>

            }

        </nav>
    )


};

export default Nav;













