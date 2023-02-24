import React, {useEffect, useState} from "react";
import {FormControlLabel, Switch} from "@mui/material";
import './Clock.css';

type PropsType = {}

const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const Clock: React.FC<PropsType> = (props) => {
    console.log('comp')
    const [mode, setMode] = useState(true)

    const [date, setDate] = useState(new Date())
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    useEffect(() => {
        console.log('useEffect')
        console.log(mode)

        const intervalId = setInterval(() => {
            // console.log(intervalId)
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
            // console.log('alert===================')
        }
    }, [])

    const secondsStyle = {
        transform: `rotate(${seconds * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${minutes * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${hours * 30}deg)`
    };

    const changeHandler = () => {
        setMode(!mode)
    }

    return <>
        {mode ? '1' : '0'}
        <h3>LearnUseEffect</h3>
        <ClockWithTwoModes mode={mode}/>

        <FormControlLabel onChange={changeHandler} control={<Switch color="default"/>} label="digital / analog"/>

        {get2digitsString(date.getHours())}
        :{get2digitsString(date.getMinutes())}
        :{get2digitsString(date.getSeconds())}

        <div className={"clock"}>
            <div className={"analog-clock"}>
                <div className="dot"></div>
                <div className={"dial seconds"} style={secondsStyle}/>
                <div className={"dial minutes"} style={minutesStyle}/>
                <div className={"dial hours"} style={hoursStyle}/>
            </div>
        </div>
    </>
}

const ClockWithTwoModes = (props: any) => {
    console.log(props.mode)

    if (props.mode) {
        return <>
            <p>123</p>
        </>
    } else {
        return <><p>456</p></>
    }
}

