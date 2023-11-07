import React from 'react';
import s from './button.module.css'


type ButtonPropsType = {
    name?: string
    color?: string
    disabled?: boolean
    children: React.ReactNode
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    const {name, color, disabled, children, ...rest} = props


    const finalClassName = `
      ${s.button}
      ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default}
       ${disabled ? s.disabled : ''}
      `

    return (
        <button className={finalClassName}>
            {children}
        </button>
    );
};

export default Button;