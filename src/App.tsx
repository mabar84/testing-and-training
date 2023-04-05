import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValueAC, setValueFromLocalStorageAC} from "./bll/counter-reducer";
import {ResetUseEffect} from "./learn/ResetUseEffect";
import {Accordion} from "./learn/Accordion/Accordion";
import {Rating, TRatingValue} from "./learn/Rating/Rating";
import {OnOff} from "./learn/OnOff/OnOff";
import {UnControlledAccordion} from "./learn/Accordion/UnControlledAccordion";
import {UnControlledRating} from "./learn/Rating/UnControlledRating";

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

    const [ratingValue, setRatingValue] = useState<TRatingValue>(0)
    const starCallBack = (value: TRatingValue) => {
        console.log(value)
        setRatingValue(value)
    }

    return (
        <div className="App">
            <OnOff on={on} setOn={onSwitch}/>
            <Accordion title={'Accordion'} collapsed={collapsed} accordionSwitch={accordionSwitch}/>

            <Rating value={ratingValue} title={'Rating'} starCallBack={starCallBack}/>
        </div>
    );
}

export default App;
