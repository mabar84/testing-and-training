type TAccordion = {
    title: string
    collapsed?: boolean
}
export const Accordion = ({title, collapsed}: TAccordion) => {
    console.log('Accordion rendered')
    return <>
        <AccordionTitle title={title}/>
        {!collapsed && <AccordionBody/>}
    </>
}
const AccordionTitle = ({title}: Pick<TAccordion, 'title'>) => {
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