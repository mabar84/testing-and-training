import {useState} from "react";

type TAccordion = {
    title: string
}

export const UnControlledAccordion = ({title}: TAccordion) => {
    console.log('Accordion rendered')
    const [collapsed, setCollapsed] = useState(true)
    const AccordionClickHandler = () => {
        setCollapsed(!collapsed)
    }

    return <>
        <button onClick={AccordionClickHandler}>toggle</button>
        <AccordionTitle title={title}/>
        {!collapsed && <AccordionBody/>}
    </>
}


const AccordionTitle = ({title}: TAccordion) => {
    console.log('AccordionTitle rendered')


    return <>
        <h2>{title}</h2>
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