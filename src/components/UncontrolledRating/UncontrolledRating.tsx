import React, {useState} from 'react';

export const UncontrolledRating = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <Star onClick={() => setValue(1)} selected={value > 0}/>
            <Star onClick={() => setValue(2)} selected={value > 1}/>
            <Star onClick={() => setValue(3)} selected={value > 2}/>
            <Star onClick={() => setValue(4)} selected={value > 3}/>
            <Star onClick={() => setValue(5)} selected={value > 4}/>
        </div>
    );
};

type StarType = {
    selected: boolean;
    onClick: () => void;
}

const Star = ({selected, onClick}: StarType) => {
    return (
        <span onClick={onClick}>
            {selected ? <b>Star </b> : "Star "}
        </span>
    )
}
