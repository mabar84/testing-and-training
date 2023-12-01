import React, {useReducer} from 'react';
import {AccordionBody} from './AccordionBody';
import {AccordionTitle} from './AccordionTitle';

type AccordionPropsType = {
    title: string,
    isCollapsed: boolean,
    items: string[]
}

export const AccordionWithReducer: React.FC<AccordionPropsType> = ({title, isCollapsed, items}) => {
    console.log('AccordionWithReducer rendering')

    const reducer = (state: boolean, action: ActionType): boolean => {
        switch (action.type) {
            case 'TOGGLE-ACCORDION': {
                return !state
            }
            default:
                throw new Error('bad action')
        }
    }

    type ActionType = ReturnType<typeof ToggleAccordionAC>

    const ToggleAccordionAC = () => {
        return {
            type: 'TOGGLE-ACCORDION'
        } as const
    }
    const [state, dispatch] = useReducer(reducer, isCollapsed)

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