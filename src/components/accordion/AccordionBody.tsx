import React from 'react';
import styled from "styled-components";

export const AccordionBody = () => {
    console.log('AccordionBody rendering');

    return (
        <StyledAccordionBody>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </StyledAccordionBody>
    );
};

const StyledAccordionBody = styled.ul`
  li {
    list-style: none;
  }

`