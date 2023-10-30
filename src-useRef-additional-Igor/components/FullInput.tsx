import React, {ChangeEvent, useState} from 'react';
import {Button} from './Button';
import {string} from 'prop-types';

type FullInputPropsType = {
    buttonName: string
    onClick: (m: string) => void
}

const FullInput = (props: FullInputPropsType) => {

    const [text, setText] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }

    const onClickHandler = () => {
        props.onClick(text)
        setText('')
    }

    return (
        <div>
            <input onChange={onChangeHandler} value={text} type="text"/>
            {/*<button onClick={onClickHandler}>{props.buttonName}</button>*/}
            <Button name={props.buttonName} onClick={onClickHandler}/>
        </div>
    );
};

export default FullInput;