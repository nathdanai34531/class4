import React, { useState } from 'react';
import './Tabbed.scss';


//Arrays
const tabItems = [
    {
        image: '/img/MissionVision/about.jpg',
        title: 'About',
        text: 'This is About text content',

    },

    {
        image: '/img/MissionVision/mission.jpg',
        title: 'Mission',
        text: 'This is Mission text content',

    },

    {
        image: '/img/MissionVision/vision.jpg',
        title: 'Vision',
        text: 'This is Vision text content',

    },

];



const Tabbed = () => {
    //stage managed
    const [currentTab, setCurrentTab] = useState(tabItems[0]);

    const isAbout = (currentTab.title === 'About' ) ? 'tab active' : 'tab';
    const isMission = ( currentTab.title === 'Mission' ) ? 'tab active' : 'tab';
    const isVision = ( currentTab.title === 'Vision' ) ? 'tab active' : 'tab';


    return (
        <div className={'Tabbed'}>

            <div className="tabs">


                <div onClick={() => { setCurrentTab(tabItems[0]) }} className={isAbout}>About</div>
                <div onClick={() => { setCurrentTab(tabItems[1]) }} className={isMission}>Mission</div>
                <div onClick={() => { setCurrentTab(tabItems[2]) }} className={isVision}>Vision</div>
            </div>

            <div className="content">
                <img src={currentTab.image} alt={currentTab.title} />
                <h2>{currentTab.title}</h2>
                <p>{currentTab.text}</p>
            </div>
        </div>
    )

}

export default Tabbed;