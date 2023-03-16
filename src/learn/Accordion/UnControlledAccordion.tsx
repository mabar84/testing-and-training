import {useState} from "react";

type TAccordion = {
    title: string,
    AccordionClickHandler?: () => void
}

export const UnControlledAccordion = ({title}: TAccordion) => {
    console.log('Accordion rendered')
    const [collapsed, setCollapsed] = useState(true)
    const AccordionClickHandler = () => {
        setCollapsed(!collapsed)
    }

    return <>
        <AccordionTitle title={title} AccordionClickHandler={AccordionClickHandler}/>
        {!collapsed && <AccordionBody/>}
    </>
}

const AccordionTitle = ({title, AccordionClickHandler}: TAccordion) => {
    return <>
        <h2 onClick={AccordionClickHandler}>{title}</h2>
    </>
}
const AccordionBody = () => {
    console.log('AccordionBody rendered')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}