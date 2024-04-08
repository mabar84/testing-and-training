import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import s from './Checkbox.module.css';
import {CheckIcon} from "@radix-ui/react-icons";

type Props = {
    value: boolean
    onChange: (value: boolean) => void
}

export const CheckBoxRadix = ({value, onChange}: Props) => (
    <form>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Checkbox.Root
                className={s.CheckboxRoot}
                defaultChecked id="c1"
                checked={value}
                onCheckedChange={onChange}
            >
                <Checkbox.Indicator className={s.CheckboxIndicator}>
                    <CheckIcon/>
                </Checkbox.Indicator>
            </Checkbox.Root>
            <label className={s.Label} htmlFor="c1">
                Accept terms and conditions.
            </label>
        </div>
    </form>
);