import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";
import {AccordionWithUseReducer} from "./AccordionWithUseReducer";

export default {
    title: 'Accordions'
}
const accordionItems = [
    {text: 'Petr', id: 1},
    {text: 'Valera', id: true},
    {text: 'Alexander', id: '3'},
    {text: 'Superman', id: false},
    {text: 'Coding', id: 0},
    {text: 'Сonscience', id: undefined},
    {text: 'Expirience', id: null},
]
const onClickElement = action('clicked')

export const ControlledAccordion = () => {
    const [collapsed, setCollapsed] = useState(false)
    const accordionSwitch = () => {
        setCollapsed(!collapsed)
    }
    return <Accordion collapsed={collapsed} title={'ControlledAccordion'}
                      onClick={onClickElement} accordionItems={accordionItems} accordionSwitch={accordionSwitch}/>
}

export const UseReducerAccordion = () => {
    return <AccordionWithUseReducer title={'ControlledAccordion'}
                                    onClickElement={onClickElement} accordionItems={accordionItems}
    />
}