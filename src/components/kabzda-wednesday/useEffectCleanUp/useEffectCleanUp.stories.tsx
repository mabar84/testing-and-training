import type {Meta} from '@storybook/react';
import {UseEffectCleanUp} from './useEffectCleanUp';

const meta: Meta<typeof UseEffectCleanUp> = {
    component: UseEffectCleanUp,
};

export default meta;

export const Example = () => <UseEffectCleanUp/>
