import React, {useState} from 'react';
import {CustomSelect, SelectWithoutMUI} from "./Select";

export default {
    title: 'Selects'
};
const selectItems = [
    {text: 'Petr', id: 1},
    {text: 'Nikolay', id: 2},
    {text: 'Alexander', id: '3'},
    // {text: 'Superman', id: false},
    //  {text: 'Coding', id: 0},
    // {text: 'Сonscience', id: undefined},
    //  {text: 'Expirience', id: null},
]
// const selectItems = [
//     {text: 'Petr', id: 1},
//     {text: 'Nicolay', id: 2},
//     {text: 'Alexander', id: '3'}
// ]
// const onChangeSelectHandler = action('clicked')

export const SelectWithMUI = () => {
    const [selectedValue, setSelectedValue] = useState<string>('')
    const onChangeSelectHandler = (e: any) => {
        console.log(e.target.value)
        setSelectedValue(e.target.value)
    }
    return <CustomSelect selectItems={selectItems}
                         title={'StoryTitle'}
                         onChange={onChangeSelectHandler}
                         value={selectedValue}/>
}

export const SelectWithSimpleTags = () => {
    const [title, setTitle] = useState('Make your choice')
    const [active, setActive] = useState(false)
    const [selectedId, setSelectedId] = useState(0)

    const toggleActive = () => {
        setActive(!active)
    }

    const clickItem = (id: any, text: string) => {
        setTitle(text)
        //toggleActive()
        setActive(!active)
        setSelectedId(id)
    }

    return <SelectWithoutMUI
        selectedId={selectedId}
        title={title}
        active={active}
        toggleActive={toggleActive}
        selectItems={selectItems}
        clickItem={clickItem}
        setActive={setActive}
    />
}