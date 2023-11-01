import React, {useState} from 'react';
import styled from 'styled-components';
import {AccordionBody} from './AccordionBody';
import {AccordionTitle} from './AccordionTitle';

type ControlledAccordion = {
    title: string
    items: string[]
    collapsed: boolean
    setCollapsed: () => void
}

export const ControlledAccordion: React.FC<ControlledAccordion> = ({title, items, collapsed, setCollapsed}) => {
    // const onClickAccordionTitleHandler = () => {
    //     setCollapsed(!collapsed)
    // }
    return (
        <StyledAccordion>
            <AccordionTitle title={title} onClickAccordionTitleHandler={setCollapsed}/>
            {!collapsed && <AccordionBody items={items}/>}
        </StyledAccordion>
    );
};
const StyledAccordion = styled.div``
