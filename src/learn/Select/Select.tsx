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
    clickItem: (id: any) => void
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

    const [hoveredId, setHoveredId] = useState<any>(null)
    const ref = useRef<HTMLDivElement>(null)
    const keyupHandler = (e: KeyboardEvent<HTMLDivElement>) => {

        e.key === 'Escape' && setActive(false)
        e.key === 'Enter' && clickItem(hoveredId)

        if (e.key === 'ArrowDown') {
            setActive(true)
            setHoveredId(selectItems[0].id)
            for (let i = 0; i < selectItems.length - 1; i++) {
                if (selectItems[i].id === hoveredId) {
                    setHoveredId(selectItems[i + 1].id)
                }
            }
        }
        if (e.key === 'ArrowUp') {
            setActive(true)
            setHoveredId(selectItems[0].id)
            for (let i = 1; i < selectItems.length; i++) {
                if (selectItems[i].id === hoveredId) {
                    setHoveredId(selectItems[i - 1].id)
                }
            }
        }
    }

    useEffect(() => {
        console.log('useEffect')

        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setActive(false)
            } else {
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [setActive]);

    const onClickTitleHandler = () => {
        toggleActive()
        setHoveredId(null)
    }
    const onClickElementHandler = (id: string | number) => {
        clickItem(id)
        setHoveredId(id)
    }

    return <div ref={ref} className={styles.main} onKeyUp={keyupHandler} tabIndex={0}>
        <h3 className={styles.title} onClick={onClickTitleHandler}>
            <p>{title}</p>
            <p>{active ? '↑' : '↓'}</p>
        </h3>
        <div className={styles.container}>
            {active && selectItems.map((el, index) => <p
                className={styles.item + ' ' + (el.id === selectedId && styles.selected)
                    + ' ' + (el.id === hoveredId && styles.hovered)}
                onClick={() => {
                    onClickElementHandler(el.id)
                }} key={index}>{el.text}</p>)}
        </div>

    </div>
}
//↓↑