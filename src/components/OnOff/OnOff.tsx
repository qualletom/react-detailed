import React from 'react';
import './OnOff.css';

type OnOffType = {
    isActive: boolean;
    setIsActive: (value: boolean) => void
}

export const OnOff = ({isActive, setIsActive}: OnOffType) => {
    console.log("UncontrolledOnOff render");
    return (
        <div className={"onoff__container"}>
            <div onClick={() => setIsActive(true)} className={`onoff__square ${isActive && "--on"}`}>On</div>
            <div onClick={() => setIsActive(false)} className={`onoff__square ${!isActive && "--off"}`}>Off</div>
            <div className={`onoff__indicator ${isActive ? "--on" : "--off"}`}></div>
        </div>
    );
};
