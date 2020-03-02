import React, { useState, useEffect } from 'react';
import '../Pages.scss';

import './Services.scss';
// import { timbuktuArray } from './servicesArray.js';
import API from '../../common/API.js';

import ServicesList from './ServicesList.jsx';
import Categories from './Categories.jsx';


const Services = () => {

    const [timbuktuArray, setTimbuktuArray] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currCat, setCurrCat] = useState('All');

    useEffect(() => {
        API.get('services/gallery').then((result) => {
            console.log('Services Server Response', result);
            setTimbuktuArray(result.data);
        });

        API.get('services/categories').then((result) => {
            console.log('Categories Server Response', result);
            setCategories(result.data);
        });
    }, []);

    return (
        <div className={'Pages Services'}>
            <h2>Services</h2>
            <Categories
                categories={categories}
                currCat={currCat}
                setCurrCat={setCurrCat}
            />
            <div className="container">
                <ServicesList timbuktuArray={timbuktuArray} currCat={currCat} />
            </div>
        </div>
    );
}

export default Services;