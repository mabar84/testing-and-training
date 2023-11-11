import React from 'react';
import styled, {css} from "styled-components";

type StarPropsType = {
    selected?: boolean
}


export const Star = (props: StarPropsType) => {
    console.log('Star rendering');
  
    return (
        <StyledStar $selected={props.selected || null}>
            &#9733;
        </StyledStar>
    )

    // if (props.selected) {
    //     return (
    //         <StyledStar >
    //             &#9733;
    //         </StyledStar>
    //     )
    // } else {
    //     return (
    //         <StyledStar>
    //             44
    //         </StyledStar>
    //     )
    // }

};


const StyledStar = styled.span<{ $selected: boolean | null }>`
  display: inline-block;
  font-size: 32px;
  line-height: 80%;
  ${props => props.$selected && css`
    color: gold;
  `}
  padding: 0 5px 5px;
`