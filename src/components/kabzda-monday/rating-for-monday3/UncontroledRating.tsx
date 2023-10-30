import React, {useState} from 'react';
import {styled} from 'styled-components';
import {UncontroledStar} from './UncontroledStar';

export const UncontrledRating = () => {
    console.log('Rating rendering');
    const [n, setN] = useState(0)
    let starArr = [1, 2, 3, 4, 5]

    return (
        <StyledRating>
            {starArr.map((el, ind) => {
                return <UncontroledStar setN={setN} value={el} key={ind} selected={el <= n}/>;
            })}
        </StyledRating>
    );
};

const StyledRating = styled.div`


`;
