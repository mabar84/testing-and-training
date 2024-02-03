import React, {useState} from 'react';
import styled from 'styled-components';
import {AccordionBody} from './AccordionBody';
import {AccordionTitle} from './AccordionTitle';

type AccordionPropsType = {
    title: string,
    isCollapsed: boolean,
    items: string[]
}

export const Accordion: React.FC<AccordionPropsType> = ({title, isCollapsed, items}) => {

    const [collapsed, setCollapsed] = useState(isCollapsed)

    const onClickAccordionTitleHandler = () => {
        setCollapsed(!collapsed)
    }

    const callBack = (itemName: string) => {
        alert(itemName)
    }
    
    return (
        <StyledAccordion>
            <AccordionTitle title={title} onClickAccordionTitleHandler={onClickAccordionTitleHandler}/>
            {!collapsed && <AccordionBody callBack={callBack} items={items}/>}
        </StyledAccordion>
    );
};

const StyledAccordion = styled.div``
