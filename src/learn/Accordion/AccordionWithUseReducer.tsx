import {useReducer} from "react";

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
type TAction = {
    type: string
}
const reducer = (state: boolean, action: TAction) => {
    if (action.type === 'TOGGLE-COLLAPSED') {
        return !state
    }
    return state
}
export const AccordionWithUseReducer = ({title, accordionItems, onClickElement}: TAccordionWithUseReducer) => {
    const action = {
        type: 'TOGGLE-COLLAPSED'
    }
    let [collapsed, dispatch] = useReducer(reducer, false)
    const toggleCollapsed = () => {
        dispatch(action)
    }
    return <>
        <AccordionTitle title={title} toggleCollapsed={toggleCollapsed}/>
        {!collapsed && <AccordionBody onClickElement={onClickElement} accordionItems={accordionItems}/>}
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