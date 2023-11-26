import React, {useState} from 'react';
import {styled} from 'styled-components';
import {CustomSelect, SelectWithoutMUI} from './Select/Select';

type KabzdaTuesdayPropsType = {}

export const KabzdaTuesday: React.FC<KabzdaTuesdayPropsType> = () => {


    return (
        <StyledKabzdaTuesday>
            <h1> KabzdaTuesday</h1>
            <SelectWithMUI/>
            <SelectWithSimpleTags/>

        </StyledKabzdaTuesday>
    );
};


const selectItems = [
    {text: 'Petr', id: 1},
    {text: 'Nikolay', id: 2},
    {text: 'Alexander', id: '3'},
    {text: 'Ivan', id: 4},
    {text: 'Element', id: '5'},
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

    const clickItem = (id: any) => {

        for (let i = 0; i < selectItems.length; i++) {
            if (selectItems[i].id === id) {
                setTitle(selectItems[i].text)
            }
        }

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

const StyledKabzdaTuesday = styled.div`
  padding: 20px;

  h1 {
    margin-top: 0;
  }
`