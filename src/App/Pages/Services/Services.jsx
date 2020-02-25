import React, { useState, useEffect } from 'react';
import '../Pages.scss';

import './Services.scss';
// import { timbuktuArray } from './servicesArray.js';
import API from '../../common/API.js';

import Service from './Service.jsx';

const ServicesList = (props) => {


    const turnLightOn = () => {
        console.log('Turning ON');
    }

    const turnLightOff = () => {
        console.log('Turning OFF');
    }


    // 1. Set Up State to keep track of data from server
    const [timbuktuArray, setTimbuktuArray] = useState([]);

    // Only do this on mount.
    useEffect(() => {
        // 2. Retrieve the data from the server
        API.get('services/gallery').then((result) => {
            // 3. Update timbuktuArray with data from server
            console.log('Services Server Response', result);
            setTimbuktuArray(result.data);
        });
    }, []);


    return timbuktuArray.map((singleService, idx) => {
        return (
            <Service key={ idx } singleService={singleService} />
        );
    });
}

const Services = () => {
    return (
        <div className={'Pages Services'}>
            <h2>Services</h2>
            <div className="container">
                <ServicesList />
            </div>
        </div>
    );
}

export default Services;