import React, {ChangeEvent, useState} from 'react';

type InputPropsType = {
    inputRef: React.RefObject<HTMLInputElement>
}

const Input = (props: InputPropsType) => {
    return (
        <input ref={props.inputRef} type="text"/>
    );
};

export default Input;