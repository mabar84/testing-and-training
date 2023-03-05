type TAccordion = {
    title: string
}
export const Accordion = (props: TAccordion) => {
    console.log('Accordion rendered')
    return <>
        <AccordionTitle title={props.title}/>
        <AccordionBody/>
    </>
}


const AccordionTitle = (props: TAccordion) => {
    console.log('AccordionTitle rendered')
    return <>
        <h2>{props.title}</h2>
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