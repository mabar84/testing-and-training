import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValueAC, setValueFromLocalStorageAC} from "./bll/counter-reducer";
import {ResetUseEffect} from "./learn/ResetUseEffect";
import {Accordion} from "./learn/Accordion/Accordion";
import {Rating} from "./learn/Rating/Rating";
import {OnOff} from "./learn/OnOff/OnOff";

function App() {
    console.log('APP')
    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    dispatch(setValueFromLocalStorageAC(value))

    const incHandler = () => {
        dispatch(incValueAC())
    }
    //
    //
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('counterValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setValue(newValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('counterValue', JSON.stringify(value))
    // }, [value])

    return (
        <div className="App">
            <OnOff on={true}/>

            {/*<h2>{value}</h2>*/}
            {/*<button onClick={incHandler}>inc</button>*/}
            {/*<header className="App-header">*/}


            {/*<ResetUseEffect/>*/}
            {/*<Rating value={2} title={'RatingTitle'}/>*/}
            {/*<Accordion title={'First'} collapsed={true}/>*/}
            {/*<Accordion title={'Second'}/>*/}
            {/*</header>*/}
        </div>
    );
}

export default App;
