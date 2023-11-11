import React, {useState} from 'react';
import {styled} from 'styled-components';
import {ControlledStar} from './ControlledStar';

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5

type ControlledRatingPropsType = {
    n: RatingType
    setN: (value: RatingType) => void
}

export const ControlledRating: React.FC<ControlledRatingPropsType> = ({n, setN}) => {
    let starArr: RatingType[] = [1, 2, 3, 4, 5]

    return (
        <StyledRating>
            {starArr.map((el, ind) => {
                return <ControlledStar setN={setN} value={el} key={ind} selected={el <= n}/>;
            })}
        </StyledRating>
    );
};

const StyledRating = styled.div`


`;
