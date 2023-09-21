import React from 'react';
import styled from "styled-components";
import {AccordionBody} from "./AccordionBody";
import {AccordionTitle} from "./AccordionTitle";

type AccordionPropsType = {
    title: string,
    isCollapsed: boolean,
    items: string[]
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <StyledAccordion>
            <AccordionTitle title={props.title}/>
            {!props.isCollapsed && <AccordionBody items={props.items}/>}
        </StyledAccordion>
    );
};

const StyledAccordion = styled.div``