import type {Meta} from '@storybook/react';
import {ClockWithSetInterval} from './ClockWithSetInterval';

const meta: Meta<typeof ClockWithSetInterval> = {
    component: ClockWithSetInterval,
};

export default meta;

export const ExampleClock = () => <ClockWithSetInterval/>
