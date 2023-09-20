import React from 'react';
import styled from "@emotion/styled";

export const Star = () => {
    console.log('Star rendering');
    return (
        <StyledStar>
            &#9733;
        </StyledStar>
    );
};

const StyledStar = styled.span`
  color: gold;
  display: inline-block;
  font-size: 32px;
  line-height: 75%;

`