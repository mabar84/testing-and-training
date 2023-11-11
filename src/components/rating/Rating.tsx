import React from 'react';
import {Star} from './Star';
import {styled} from 'styled-components';

type RatingPropsType = {
    rating: 0 | 1 | 2 | 3 | 4 | 5;
};

export const Rating = (props: RatingPropsType) => {
    console.log('Rating rendering');
    let n = props.rating;
    let arrSelected = Array.from({length: n}, (_, a) => a + 1);
    let arrUnSelected = Array.from({length: 5 - n}, (_, a) => a + 1);

    return (
        <StyledRating>
            {arrSelected.map((el, ind) => {
                return <Star key={ind} selected={true}/>;
            })}
            {arrUnSelected.map((el, ind) => {
                return <Star key={ind} selected={false}/>;
            })}
            {/*<input accessKey="l" />*/}
        </StyledRating>
    );
};

const StyledRating = styled.div`
  *:focus-within {
    background: #ff8;
    color: black;
  }

  input {
    background-color: red;
    box-sizing: border-box;
  }
`;
