import type {Meta} from '@storybook/react';
import {Accordion} from './Accordion';

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;

export const AccordionOpened = () => {
    return <Accordion title={'Accordion Opened'} items={['a2', 'b2', 'c2']} isCollapsed={false}/>
};
export const AccordionClosed = () => {
    return <Accordion title={'Accordion Closed'} items={['a1', 'b1', 'c1']} isCollapsed={true}/>
};

export const AccordionEditable = {
    args: {
        isCollapsed: false,
        title: 'AccordionEditable',
        items: ['a', 'b', 'c']
    },
};
