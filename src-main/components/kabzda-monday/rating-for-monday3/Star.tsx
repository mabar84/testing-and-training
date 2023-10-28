import React from 'react';
import styled, {css} from 'styled-components';

type StarPropsType = {
    selected?: boolean
    value: number
    setN: (value: number) => void
}


export const Star = (props: StarPropsType) => {
    console.log('Star rendering');

    const onClickHandler = () => {
        props.setN(props.value)
    }

    return (
        <StyledStar onClick={onClickHandler} $selected={props.selected || null}>
            &#9733;
        </StyledStar>
    )
};

const StyledStar = styled.span<{ $selected: boolean | null }>`
  display: inline-block;
  margin-right: 4px;
  font-size: 32px;
  cursor: pointer;
  line-height: 80%;
  ${props => props.$selected && css`
    color: gold;
  `}
  padding: 0 5px 5px;
`