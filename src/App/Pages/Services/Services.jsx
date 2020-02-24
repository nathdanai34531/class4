import React, { useState, useEffect } from 'react';
import '../Pages.scss';
import './Services.scss';
// import { timbuktuArray } from './servicesArray.js';
import API from '../../common/API.js';

const ServicesList = () => {

    // 1. Set Up State to keep track of data from server
    const [timbuktuArray, setTimbuktuArray] = useState([ ]);

    // Only do this on mount.
    useEffect(() => {
        // 2. Retrieve the data from the server
        API.get('services/gallery').then((result) => {
            // 3. Update timbuktuArray with data from server
            console.log('Services Server Response', result);
            setTimbuktuArray(result.data);
        });
    }, [ ]);


    return timbuktuArray.map((singleService, idx) => {
        return (
            <div className='Service'>
                <img src={ singleService.image } alt={ singleService.title } />
                <h3>{ singleService.title }</h3>
            </div>
        );
    });
}

const Services = () => {
    return (
        <div className={ 'Pages Services' }>
            <h2>Services</h2>
            <div className="container">
                <ServicesList />
            </div>
        </div>
    );
}

export default Services;