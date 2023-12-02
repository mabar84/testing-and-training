import React, {useReducer} from 'react';
import {AccordionBody} from './AccordionBody';
import {AccordionTitle} from './AccordionTitle';
import {reducer, ToggleAccordionAC} from './accordion-reducer';

type AccordionPropsType = {
    title: string,
    isCollapsed: boolean,
    items: string[]
}

export type StateType = {
    isCollapsed: boolean
}

export const AccordionWithReducer: React.FC<AccordionPropsType> = ({title, isCollapsed, items}) => {
    console.log('AccordionWithReducer rendering')

    const [state, dispatch] = useReducer(reducer, {isCollapsed: isCollapsed})

    const onClickAccordionTitleHandler = () => {
        dispatch(ToggleAccordionAC())
    }

    const callBack = (itemName: string) => {
        alert(itemName)
    }
    return (
        <>
            <AccordionTitle title={title} onClickAccordionTitleHandler={onClickAccordionTitleHandler}/>
            {!state && <AccordionBody callBack={callBack} items={items}/>}
        </>
    );
};