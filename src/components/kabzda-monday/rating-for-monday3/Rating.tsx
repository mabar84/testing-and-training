import React, {useState} from 'react';
import {Star} from './Star';
import {styled} from 'styled-components';

export const UnContrloRating = () => {
    console.log('Rating rendering');
    const [n, setN] = useState(0)
    let starArr = [1, 2, 3, 4, 5]

    return (
        <StyledRating>
            {starArr.map((el, ind) => {
                return <Star setN={setN} value={el} key={ind} selected={el <= n}/>;
            })}
        </StyledRating>
    );
};

const StyledRating = styled.div`


`;
