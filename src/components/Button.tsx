import React from 'react';

type ButtonPropsType = {
    name: string
    onClick: () => void
}

export const Button = (props: ButtonPropsType) => {

    const onClickHandler = () => props.onClick()

    return (
        <button onClick={onClickHandler}>
            {props.name}
        </button>
    );
};

