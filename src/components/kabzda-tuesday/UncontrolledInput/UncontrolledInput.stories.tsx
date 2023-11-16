import type {Meta} from '@storybook/react';
import {UncontrolledInput} from './UncontrolledInput';
import {ChangeEvent, useRef, useState} from 'react';

const meta: Meta<typeof UncontrolledInput> = {
    component: UncontrolledInput,
};

export default meta;

export const JustInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <>
        <input onChange={onChangeHandler}/> === {value} ===
    </>
};


export const InputWithSaveButton = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement | null>(null)

    const onClickHandler = () => {
        if (inputRef.current) {
            setValue(inputRef.current.value)
            inputRef.current.value = ''
        }
    }
    return <>
        <input ref={inputRef}/> Saved value: {value}
        <div>
            <button onClick={onClickHandler}>save</button>
        </div>
    </>
};