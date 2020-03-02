import React from 'react';
import Service from './Service.jsx';

const ServicesList = ({ timbuktuArray, currCat }) => {

    return timbuktuArray.map((singleService, idx) => {
        if (currCat === "All" || currCat === singleService.category) {
            return (
                <Service key={idx} singleService={singleService} />
            );
        }
        return false;
    });
}

export default ServicesList;