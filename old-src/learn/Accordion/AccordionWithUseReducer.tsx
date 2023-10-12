import {useReducer} from "react";
import {AccordionReducer, action} from "./AccordionReducer";

type TAccordionItem = {
    text: string
    id: any
}
type TAccordionWithUseReducer = {
    title: string,
    onClickElement: (value: any) => void
    toggleCollapsed?: () => void
    accordionItems: TAccordionItem[]
}

export type TState = {
    collapsed: boolean
}


export const AccordionWithUseReducer = ({title, accordionItems, onClickElement}: TAccordionWithUseReducer) => {

    const initState: TState = {
        collapsed: false
    }

    let [state, dispatch] = useReducer(AccordionReducer, initState)

    const toggleCollapsed = () => {
        dispatch(action)
    }
    return <>
        <AccordionTitle title={title} toggleCollapsed={toggleCollapsed}/>
        {!state.collapsed && <AccordionBody onClickElement={onClickElement} accordionItems={accordionItems}/>}
    </>
}
const AccordionTitle = ({title, toggleCollapsed}: Pick<TAccordionWithUseReducer, 'title' | 'toggleCollapsed'>) => {
    return <>
        <h2 onClick={toggleCollapsed}>{title}</h2>
    </>
}
const AccordionBody = ({
                           accordionItems,
                           onClickElement
                       }: Pick<TAccordionWithUseReducer, 'accordionItems' | 'onClickElement'>) => {
    return <ul>
        {accordionItems.map((el, index) => <li onClick={() => {
            onClickElement(el.id)
        }} key={index}>{`${el.text}---${el.id}`}</li>)}
    </ul>
}