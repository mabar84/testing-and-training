import type {Meta} from '@storybook/react';
import {ReactMemoDemo} from './ReactMemoDemo';
import {ChangeEvent, useRef, useState} from 'react';

const meta: Meta<typeof ReactMemoDemo> = {
    component: ReactMemoDemo,
};

export default meta;

export const Example1 = () => <ReactMemoDemo/>
