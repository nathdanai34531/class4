import React, { useState, useEffect } from 'react';
import './Services.scss';
// import { servicesTitles } from './services.js';
import API from '../../common/API.js';



const ServicesTitles = () => {


    //1. Set up state to keep track of data from server
    const [servicesTitles, setServicesTitles] = useState([]);

    //Only do this once
    useEffect(() => {
        //2. Retrieve data from the server
        API.get('services').then((result) => {


            //3. Update staff members with data from server
            console.log('Services Response', result);
            setServicesTitles(result.data);
        });
    }, []);


     
   



    return servicesTitles.map((servicesTitle, idx) => {
        return (

            <div key={idx} className={'ServicesTitle'}>
                <img src={servicesTitles.img} alt={ServicesTitles.name} />
                <h3>{servicesTitle.name}</h3>
            </div>
        );
    });
}



const Services = () => {
    return (
        <div className={' Pages Services'}>

            <h2>Services goes here</h2>

            <div className='container'>
                <ServicesTitles />
            </div>


        </div>
    )
}

export default Services;