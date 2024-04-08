
import * as React from 'react';
import {Control, useController} from "react-hook-form";
import {Inputs} from "../../../App";
import {CheckBoxRadix} from "../../checkBoxRadix/CheckBoxRadix";

type Props = {
    name: "login" | "password"|"rememberMe";
    control: Control<Inputs>
};
export const ControlledCheckBoxRadix = ({name,control}: Props) => {
    const {
        field: {value, onChange},
    } = useController({
        name: 'rememberMe',
        control,
    })
    return (
        <div>
            <CheckBoxRadix value={value} onChange={onChange}/>
        </div>
    );
};