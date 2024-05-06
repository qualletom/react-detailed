import React, {useState} from 'react';
import './UncontrolledOnOff.css';

// type OnOffType = {
//     isActive: boolean;
// }

export const UncontrolledOnOff = () => {
    console.log("UncontrolledOnOff render");
    const [isActive, setIsActive] = useState(false);

    const handleSwitchOnClick = () => {
        setIsActive(true);
    }

    const handleSwitchOffClick = () => {
        setIsActive(false)
    }

    return (
        <div className={"onoff__container"}>
            <div onClick={handleSwitchOnClick} className={`onoff__square ${isActive && "--on"}`}>On</div>
            <div onClick={handleSwitchOffClick} className={`onoff__square ${!isActive && "--off"}`}>Off</div>
            <div className={`onoff__indicator ${isActive ? "--on" : "--off"}`}></div>
        </div>
    );
};
