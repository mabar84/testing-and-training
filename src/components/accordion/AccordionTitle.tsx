import React from 'react';
import styled from "styled-components";

type AccordionTitlePropsTitle = {
    title: string;
}

export const AccordionTitle: React.FC<AccordionTitlePropsTitle> = ({title}) => {
    console.log('AccordionTitle rendering');
    return (
        <StyledAccordionTitle>
            {title}
        </StyledAccordionTitle>
    );
};


const StyledAccordionTitle = styled.h3`
  margin-bottom: 0;
  cursor: pointer;
`
