import {ChangeHandler, RefCallBack} from "react-hook-form";
import {forwardRef} from "react";


type Props = {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: RefCallBack;
    name: "login"|"password";
};
export const TextField = forwardRef<HTMLInputElement,Props>(({onChange, onBlur,  name},ref) => {
    return (
        <input
            type="text"
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            name={name}
        />
    );
});