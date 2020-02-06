import React from 'react';
import './Staff.scss';
import { staffMembers } from './staff.js';

const StaffMembers = () => {
    console.log('staffMembers', staffMembers);
    return staffMembers.map((staffMember, idx) => {
        return (

            <div key={idx} className={'StaffMember'}>
                <img src={staffMember.img} alt={StaffMembers.name} />
                <h3>{staffMember.name}</h3>
            </div>
        );
    });
}



const Staff = () => {
    return (
        <div className='Staff'>

            <h2>Our Staffs</h2>

            <div className='container'>

                <StaffMembers />

            </div>

        </div>
    )
}

export default Staff;