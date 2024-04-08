import {TextField} from "./TextField";
import {Control, useController} from "react-hook-form";
import {Inputs} from "../../../App";

type Props = {
    name: "login" | "password";
    control: Control<Inputs>
};
export const ControlledTextField = ({name, control}: Props) => {
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