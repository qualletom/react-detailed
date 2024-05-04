import React, {useState} from 'react';
import './OnOff.css';

// type OnOffType = {
//     isActive: boolean;
// }

export const OnOff = () => {
    console.log("OnOff render");
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={"onoff__container"}>
            <div onClick={() => setIsActive(true)} className={`onoff__square ${isActive && "--on"}`}>On</div>
            <div onClick={() => setIsActive(false)} className={`onoff__square ${!isActive && "--off"}`}>Off</div>
            <div className={`onoff__indicator ${isActive ? "--on" : "--off"}`}></div>
        </div>
    );
};
