import React, {useRef, useState} from 'react';

export default {
    title: 'Inputs'
};

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

export const UncontrolledInput = () => <input/>
