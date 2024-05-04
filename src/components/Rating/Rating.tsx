import React from 'react';

type RatingType = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
}

export const Rating = ({value} : RatingType) => {
    return (
        <div>
            <Star selected={value > 0} />
            <Star selected={value > 1} />
            <Star selected={value > 2} />
            <Star selected={value > 3} />
            <Star selected={value > 4} />
        </div>
    );
};

type StarType = {
    selected: boolean;
}

const Star = ({selected}: StarType) => {
    if (selected) {
        return <span><b>Star</b></span>
    }

    return <span>Star</span>
}
