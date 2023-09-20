import React from 'react';
import styled from "styled-components";

type AccordionTitlePropsTitle = {
    title: string;
}

export const AccordionTitle = (props: AccordionTitlePropsTitle) => {
    console.log('AccordionTitle rendering');
    return (
        <StyledAccordionTitle>
            {/*{props.title}*/}
        </StyledAccordionTitle>
    );
};


const StyledAccordionTitle = styled.h3``
