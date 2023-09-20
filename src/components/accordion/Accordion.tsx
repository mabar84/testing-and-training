import React from 'react';
import styled from "styled-components";
import {AccordionBody} from "./AccordionBody";
import {AccordionTitle} from "./AccordionTitle";

export const Accordion = () => {
    return (
        <StyledAccordion>
            <AccordionTitle/>
            <AccordionBody/>
        </StyledAccordion>
    );
};

const StyledAccordion = styled.div``
