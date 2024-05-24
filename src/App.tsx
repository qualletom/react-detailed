import React, {useState} from 'react';
import './App.css';
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState(false);
    const [on, setOn] = useState(false);

    console.log("App render");
    return (
        <div className="App">
            <Accordion title={"Menu"} collapsed={accordionCollapsed} onTitleClick={setAccordionCollapsed}/>
            <UncontrolledRating />
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledRating />*/}
            <Rating value={ratingValue} setValue={setRatingValue} />
            <hr/>
            {/*<UncontrolledAccordion title={""} />*/}
            {/*<UncontrolledAccordion title={""} />*/}
            <hr/>
            <OnOff isActive={on} setIsActive={setOn}/>

            {/*<UncontrolledAccordion title={"Menu"}/>*/}
            {/*<UncontrolledAccordion title={"Users"}/>*/}
        </div>
    );
}

export default App;
