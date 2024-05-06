import React from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingType = {
    value: RatingValueType;
    setValue: (value: RatingValueType) => void;
}

export const Rating = ({value, setValue}: RatingType) => {
    return (
        <div>
            <Star selected={value > 0} onClick={() => setValue(1)}/>
            <Star selected={value > 1} onClick={() => setValue(2)}/>
            <Star selected={value > 2} onClick={() => setValue(3)}/>
            <Star selected={value > 3} onClick={() => setValue(4)}/>
            <Star selected={value > 4} onClick={() => setValue(5)}/>
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
