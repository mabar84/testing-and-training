import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import React, {KeyboardEvent, useEffect, useRef, useState} from "react";
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
    setActive: (active: boolean) => void
    selectedId: any
}

export const SelectWithoutMUI = ({
                                     selectedId,
                                     active,
                                     title,
                                     toggleActive,
                                     selectItems,
                                     clickItem,
                                     setActive
                                 }: TSelectWithoutMUI) => {

    const keyupHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        console.log(e.key)
        if (e.keyCode === 38 || e.keyCode === 40)
            console.log(e.keyCode)
    }
    const ref = useRef<HTMLDivElement>(null)

    const [clickedOutside, setClickedOutside] = useState(false);
    useEffect(() => {
        console.log(active)

        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setClickedOutside(true);
                console.log('clickedOut')
                setActive(false)

            } else {
                setClickedOutside(false);
                console.log('clickedIn')
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref, active]);

    return <div ref={ref} className={styles.main} onKeyUp={keyupHandler} tabIndex={0}>
        <h3 onMouseEnter={() => {
            console.log(123)
        }} className={styles.title} onClick={toggleActive}>
            <p>{title}</p>
            <p>{active ? '↑' : '↓'}</p>
        </h3>
        <div className={styles.container}>
            {active && selectItems.map((el, index) => <p
                className={styles.item + ' ' + (el.id === selectedId && styles.selected)}
                onClick={() => {
                    clickItem(el.id, el.text)
                }} key={index}>{el.text}</p>)}
        </div>
    </div>
}
//↓↑