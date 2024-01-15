import type {Meta} from '@storybook/react';
import {Input} from './Input';
import {ChangeEvent, useRef, useState} from 'react';

const meta: Meta<typeof Input> = {
    component: Input,
};

export default meta;

export const UncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <>
        <input onChange={onChangeHandler}/> === {value} ===
    </>
};

export const UncontrolledInputWithSaveButton = () => {
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

export const ControlledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <>
        <input value={value} onChange={onChangeHandler}/>
    </>
};

export const ControlledCheckbox = () => {
    const [value, setValue] = useState(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }
    return <>
        <input type={'checkbox'} checked={value} onChange={onChangeHandler}/>
    </>
};

export const ControlledSelect = () => {
    const [value, setValue] = useState<string | undefined>(undefined)
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }
    return <select value={value} onChange={onChangeHandler}>
        <option>transparent</option>
        <option value={'red'}>Red</option>
        <option value={'blue'}>Blue</option>
        <option value={'green'}>Green</option>
    </select>
};