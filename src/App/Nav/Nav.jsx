import React, { useState } from 'react';
import './Nav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    const [showMenu, updateShowMenu] = useState(true);
    

const handhamclick = () =>{
    console.log('Youhitham') ;

    let newShowMenu;

    if (showMenu === true) {
        newShowMenu = false;
    } else {
        newShowMenu = true;
    }


    updateShowMenu(newShowMenu);
}

    return (
        <nav className='Nav'>

            <div className="hamburger" onClick={handhamclick}>
                <FontAwesomeIcon icon={ faBars } />

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













