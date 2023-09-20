import React from 'react';
import styled from "styled-components";
import {AccordionBody} from "./AccordionBody";
import {AccordionTitle} from "./AccordionTitle";

type AccordionPropsType = {
    title: string
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <StyledAccordion>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </StyledAccordion>
    );
};

const StyledAccordion = styled.div``
