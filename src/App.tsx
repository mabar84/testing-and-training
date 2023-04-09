import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValueAC, setValueFromLocalStorageAC} from "./bll/counter-reducer";
import {ResetUseEffect} from "./learn/ResetUseEffect";
import {Accordion} from "./learn/Accordion/Accordion";
import {Rating, TRatingValue} from "./learn/Rating/Rating";
import {OnOff} from "./learn/OnOff/OnOff";
import {UnControlledRating} from "./learn/Rating/UnControlledRating";
// import {CustomSelect} from "./learn/Select/Select";
import {Select, SelectChangeEvent} from "@mui/material";
import {CustomSelect, SelectWithoutMUI} from "./learn/Select/Select";

function App() {
    console.log('APP')
    // const value = useSelector<AppStateType, number>(state => state.counter.value)
    // const dispatch = useDispatch()

    const [on, setOn] = useState<boolean>(true)
    const onSwitch = () => {
        setOn(!on)
    }

    const [collapsed, setCollapsed] = useState<boolean>(false)
    const accordionSwitch = () => {
        setCollapsed(!collapsed)
    }

    const onClick = (message: any) => {
        alert(`item №${message} was clicked`)
    }

    const [selectedValue, setSelectedValue] = useState<string>('')

    const onChangeSelectHandler = (e: SelectChangeEvent) => {
        setSelectedValue(e.target.value)
        console.log(e.target.value)
    }

    const accordionItems = [
        {text: 'Petr', id: 1},
        {text: 'Nicolay', id: 2},
        {text: 'Alexander', id: '3'}
    ]
    const selectItems = [
        {text: 'Petr', id: 1},
        {text: 'Nicolay', id: 2},
        {text: 'Alexander', id: '3'}
    ]

    const [ratingValue, setRatingValue] = useState<TRatingValue>(0)
    const starCallBack = (value: TRatingValue) => {
        console.log(value)
        setRatingValue(value)
    }

    return (
        <div className="App">
            {/*<OnOff on={on} setOn={onSwitch}/>*/}
            {/*<Accordion title={'Accordion'} collapsed={collapsed} accordionSwitch={accordionSwitch}*/}
            {/*           onClick={onClick} accordionItems={accordionItems}/>*/}

            {/*<Rating value={ratingValue} title={'Rating'} starCallBack={starCallBack}/>*/}
            <br/>
            <CustomSelect title={'SomeTitle'} value={selectedValue} selectItems={selectItems}
                          onChange={onChangeSelectHandler}/>

        </div>
    );
}

export default App;
