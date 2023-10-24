import React, {useState} from 'react';
import styled from 'styled-components';
import {AccordionBody} from './AccordionBody';
import {AccordionTitle} from './AccordionTitle';

type AccordionPropsType = {
    title: string
    items: string[]
}

export const UncontrolledAccordion: React.FC<AccordionPropsType> = ({title, items}) => {

    const [collapsed, setCollapsed] = useState(true)

    const onClickAccordionTitleHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <StyledAccordion>
            <AccordionTitle title={title} onClickAccordionTitleHandler={onClickAccordionTitleHandler}/>
            {!collapsed && <AccordionBody items={items}/>}
        </StyledAccordion>
    );
};

const StyledAccordion = styled.div``
