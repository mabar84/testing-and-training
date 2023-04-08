type TAccordion = {
    title: string,
    collapsed?: boolean
    accordionSwitch: () => void
    onClick: (message: any) => void
    accordionItems: TAccordionItem[]
}
type TAccordionItem = {
    text: string
    id: any
}
export const Accordion = ({title, accordionSwitch, collapsed, accordionItems, onClick}: TAccordion) => {
    return <>
        <AccordionTitle title={title} accordionSwitch={accordionSwitch}/>
        {!collapsed && <AccordionBody onClick={onClick} accordionItems={accordionItems}/>}
    </>
}
const AccordionTitle = ({title, accordionSwitch}: Pick<TAccordion, 'title' | 'accordionSwitch'>) => {
    return <>
        <h2 onClick={accordionSwitch}>{title}</h2>
    </>
}
const AccordionBody = ({accordionItems, onClick}: Pick<TAccordion, 'accordionItems' | 'onClick'>) => {
    return <ul>
        {accordionItems.map(el => <li onClick={() => {
            onClick(el.id)
        }} key={el.id}>{`${el.text}---${el.id}`}</li>)}
    </ul>
}
