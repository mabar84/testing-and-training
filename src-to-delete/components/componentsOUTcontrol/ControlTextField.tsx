import * as React from 'react';
import {ChangeHandler, Control, useController} from "react-hook-form";
import {TextField} from "../TextField/TextField";
import {Inputs} from "../../App";

type Props = {
    name: "login" | 'password'
    control: Control<Inputs>
};

export const ControlTextField = ({name, control}: Props) => {

    const {
        field: {value, onChange},
    } = useController({
        name,
        control,
    })

    return (
        <TextField onChange={onChange} name={name}/>
    );
};