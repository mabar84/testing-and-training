import type {Meta} from '@storybook/react';
import {AccordionWithReducer} from './AccordionWithReducer';

const meta: Meta<typeof AccordionWithReducer> = {
    component: AccordionWithReducer,
};

export default meta;

export const AccordionWithReducerStory = () => {
    return <AccordionWithReducer title={'Accordion With Reducer'} items={['a1', 'b1', 'c1']} isCollapsed={false}/>
};