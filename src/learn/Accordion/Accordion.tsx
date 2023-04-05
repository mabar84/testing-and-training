type TAccordion = {
    title: string,
    collapsed?: boolean
    accordionSwitch: () => void
}

export const Accordion = ({title, accordionSwitch, collapsed}: TAccordion) => {
    return <>
        <AccordionTitle title={title} accordionSwitch={accordionSwitch}/>
        {!collapsed && <AccordionBody/>}
    </>
}

const AccordionTitle = ({title, accordionSwitch}: TAccordion) => {
    return <>
        <h2 onClick={accordionSwitch}>{title}</h2>
    </>
}
const AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}