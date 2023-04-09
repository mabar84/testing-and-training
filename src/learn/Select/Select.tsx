import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import React from "react";
import styles from './Select.module.css';

type TSelect = {
    title: string
    value: string
    onChange: (value: any) => void
    selectItems: TSelectItem[]
}
type TSelectItem = {
    text: string
    id: any
}
export const CustomSelect = ({title, value, selectItems, onChange}: TSelect) => {
    return <FormControl sx={{m: 1, minWidth: 200}}>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label={title}
            onChange={onChange}
        >
            {selectItems.map(el => <MenuItem
                key={el.id} value={el.id}>{el.text}
            </MenuItem>)}
        </Select>
    </FormControl>
}

type TSelectWithoutMUI = {
    active: boolean
    title: string
    selectItems: TSelectItem[]
    clickItem: (id: any, text: string) => void
    toggleActive: () => void
}

export const SelectWithoutMUI = ({active, title, toggleActive, selectItems, clickItem}: TSelectWithoutMUI) => {

    return <>
        <h3 className={styles.title} onClick={toggleActive}>
            <p>{title}</p>
            <p>{active ? '↑' : '↓'}</p>
        </h3>
        <div>
            {active && selectItems.map(el => <p
                className={styles.item}
                onClick={() => {
                    clickItem(el.id, el.text)
                }} key={el.id}>{el.text}</p>)}
        </div>
    </>
}
//↓↑