import React from 'react';
import './Main.scss';
import { Switch, Route } from 'react-router-dom';

import Welcome from '../Pages/Welcome';
import Contact from '../Pages/Contact';
import Services from '../Pages/Services';


const Main = () => {
    return (
        <main className='Main'>

            <Switch>
                <Route path='/services'>
                    <Services />
                </Route>

                <Route path='/contact'>
                    <Contact />
                </Route>

                <Route path='/'>
                    <Welcome />
                </Route>


            </Switch>


        </main>

    )
};

export default Main;

