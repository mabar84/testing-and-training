import type {Meta} from '@storybook/react';
import {Accordion} from '../../accordion/Accordion';
import {ControlledOnOff} from './ControlledOnOff';
import {useState} from 'react';
import {UncontrolledOnOff} from './UncontrolledOnOff';

const meta: Meta<typeof ControlledOnOff> = {
    component: ControlledOnOff,
};

export default meta;

export const OnOffAlwaysOn = () => {
    return <ControlledOnOff on={true} setOn={x => x}/>
};
export const OnOffAlwaysOff = () => {
    return <ControlledOnOff on={false} setOn={x => x}/>
};
export const OnOffSwitch = () => {
    return <UncontrolledOnOff/>
};