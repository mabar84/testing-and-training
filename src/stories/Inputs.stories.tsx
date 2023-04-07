import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Inputs'
};

export const UncontrolledInput = () => <input/>

export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickButtonHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/>
        <br/>Value:<br/>{value}<br/>
        <button onClick={onClickButtonHandler}>Show value</button>
    </>
}

export const ControlledInput = () => {
    const [value, setValue] = useState('')
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <>
        <input onChange={onChangeInputHandler} value={value}/>
    </>
}

export const ControlledCheckbox = () => {
    const [value, setValue] = useState(false)
    const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }
    return <>
        <input type={"checkbox"} onChange={onChangeCheckboxHandler} checked={value}/>
    </>
}
export const ControlledSelect = () => {
    const [value, setValue] = useState<string>('0')
    const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }
    return <>
        <select onChange={onChangeSelectHandler} value={value}>
            <option value="0">000</option>
            <option value="1">111</option>
            <option value="2">222</option>
            <option value="3">333</option>
            <option value="4">444</option>
        </select>
    </>
}
