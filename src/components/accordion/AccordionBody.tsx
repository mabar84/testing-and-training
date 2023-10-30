import React from 'react';
import styled from "styled-components";


type AccordionBodyPropsType = {
    items: string[]
}

export const AccordionBody = (props: AccordionBodyPropsType) => {
    console.log('AccordionBody rendering');

    return (
        <StyledAccordionBody>
            {props.items.map((el, ind) => {
                return <li key={ind}>{el}</li>
            })}
        </StyledAccordionBody>
    );
};

const StyledAccordionBody = styled.ul`
  li {
    list-style: none;
  }

`