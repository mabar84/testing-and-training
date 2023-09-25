import React, {useState} from "react";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValueAC, setValueFromLocalStorageAC} from "./bll/counter-reducer";
import {ResetUseEffect} from "./learn/ResetUseEffect";
import {Rating} from "./components/rating/Rating";
import {Accordion} from "./components/accordion/Accordion";
import {OnOff} from "./learn/OnOff/OnOff";
import {UnControlledRating} from "./learn/Rating/UnControlledRating";
// import {CustomSelect} from "./learn/Select/Select";
import {Select, SelectChangeEvent} from "@mui/material";
import {CustomSelect, SelectWithoutMUI} from "./learn/Select/Select";
import ColorPicker from "./learn/ColorPicker/ColorPicker";
import {Button} from "./components/Button";
import {TRatingValue} from "./learn/Rating/Rating";

function App() {
    console.log("APP");
    // const value = useSelector<AppStateType, number>(state => state.counter.value)
    // const dispatch = useDispatch()

    const [on, setOn] = useState<boolean>(true);
    const onSwitch = () => {
        setOn(!on);
    };

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const accordionSwitch = () => {
        setCollapsed(!collapsed);
    };

    const onClick = (message: any) => {
        alert(`item №${message} was clicked`);
    };

    const [selectedValue, setSelectedValue] = useState<string>("");

    const onChangeSelectHandler = (e: SelectChangeEvent) => {
        setSelectedValue(e.target.value);
        console.log(e.target.value);
    };

    const accordionItems = [
        {text: "Petr", id: 1},
        {text: "Nicolay", id: 2},
        {text: "Alexander", id: "3"},
    ];
    const selectItems = [
        {text: "Petr", id: 1},
        {text: "Nicolay", id: 2},
        {text: "Alexander", id: "3"},
    ];

    const [ratingValue, setRatingValue] = useState<TRatingValue>(0);
    const starCallBack = (value: TRatingValue) => {
        console.log(value);
        setRatingValue(value);
    };

    return (
        <div className="App">
            <Rating rating={0}/>
            <Rating rating={1}/>
            <Rating rating={2}/>
            <Rating rating={3}/>
            <Rating rating={4}/>
            <Rating rating={5}/>
            <Accordion items={['4', '5', '6']} isCollapsed={false} title={'First accordion'}/>
            <Accordion items={['7', '8', '9']} isCollapsed={true} title={'Second accordion'}/>
            {/*<OnOff on={on} setOn={onSwitch}/>*/}
            {/*<Accordion title={'Accordion'} collapsed={collapsed} accordionSwitch={accordionSwitch}*/}
            {/*           onClick={onClick} accordionItems={accordionItems}/>*/}

            {/*<Rating value={ratingValue} title={'Rating'} starCallBack={starCallBack}/>*/}
            {/*<br/>*/}
            {/*<CustomSelect title={"SomeTitle"} value={selectedValue} selectItems={selectItems}*/}
            {/*              onChange={onChangeSelectHandler}/>*/}
            {/*<ColorPicker/>*/}
            {/*<Button iconId='coins' style={{backgroundColor: 'yellow'}}/>*/}
            {/*<Button iconId='clock' style={{backgroundColor: 'skyblue'}}/>*/}


            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8159097.348826552!2d73.2403564!3d3.1120982500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b599bfaafb7bbd%3A0x414509e181956289!2z0JzQsNC70YzQtNC40LLRiw!5e0!3m2!1sru!2sby!4v1695654013229!5m2!1sru!2sby"
                width="600" height="450" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
    );
}

export default App;
