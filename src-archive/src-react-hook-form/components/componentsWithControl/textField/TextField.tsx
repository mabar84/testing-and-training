import {ChangeHandler, Control, RefCallBack, useController, UseControllerProps} from "react-hook-form";
import {ComponentPropsWithoutRef, forwardRef} from "react";
import {Inputs} from "../../../App";

// type Props = {
//     name: "login" | "password";
//     control: Control<Inputs>
// } & ComponentPropsWithoutRef<'input'>
type Props<T extends Inputs> = UseControllerProps<T>

export const TextField = <T extends Inputs>({control, name}: Props<T>) => {
    const {
        field: {value, onChange},
    } = useController({
        name,
        control,
    })
    return (
        <input
            onChange={onChange}
            name={name}
        />
    );
};