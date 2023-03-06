type TAccordion = {
    title: string
    collapsed: boolean
}
export const Accordion = ({title, collapsed}: TAccordion) => {
    console.log('Accordion rendered')
    return <>
        <AccordionTitle title={title}/>
        <AccordionBody collapsed={collapsed}/>
    </>
}
const AccordionTitle = ({title}: Pick<TAccordion, 'title'>) => {
    console.log('AccordionTitle rendered')
    return <>
        <h2>{title}</h2>
    </>
}
const AccordionBody = ({collapsed}: Omit<TAccordion, 'title'>) => {
    console.log('AccordionBody rendered')
    if (collapsed) {
        return <ul>
        </ul>
    } else {
        return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    }
}