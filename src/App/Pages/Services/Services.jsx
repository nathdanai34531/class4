import React from 'react';
import './Services.scss';
import { servicesTitles }  from './services.js';

const ServicesTitle = () => {
    return servicesTitles.map((servicesTitle, idx) => {
        return (

            <div key={idx} className={'ServicesTitle'}>
                <img src={servicesTitle.img} alt={ServicesTitle.name} />
                <h3>{servicesTitle.name}</h3>
            </div>
        );
    });
}



const Services = () => {
    return (
        <div className='Services'>

            Services goes here
            <ServicesTitle />



        </div>
    )
}

export default Services;