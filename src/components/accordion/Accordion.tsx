import React from 'react';
import styled from "styled-components";
import {AccordionBody} from "./AccordionBody";
import {AccordionTitle} from "./AccordionTitle";

type AccordionPropsType = {
    title: string,
    isCollapsed: boolean,
    items: string[]
}

export const Accordion: React.FC<AccordionPropsType> = ({title, isCollapsed, items}) => {
    return (
        <StyledAccordion>
            <AccordionTitle title={title}/>
            {!isCollapsed && <AccordionBody items={items}/>}
        </StyledAccordion>
    );
};

const StyledAccordion = styled.div``
