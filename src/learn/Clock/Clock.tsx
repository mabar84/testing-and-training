import React, {useEffect, useState} from "react";
import {FormControlLabel, Switch} from "@mui/material";
import './Clock.css';

type PropsType = {}

const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const Clock: React.FC<PropsType> = (props) => {
    const [mode, setMode] = useState(true)

    const changeHandler = () => {
        setMode(!mode)
    }

    return <>
        <h3>LearnUseEffect</h3>
        <FormControlLabel onChange={changeHandler} control={<Switch color="default"/>} label="digital / analog"/>
        <ClockWithTwoModes mode={mode}/>
    </>
}
type TClockWithTwoModes = {
    mode: boolean
}

const ClockWithTwoModes: React.FC<TClockWithTwoModes> = ({mode}) => {
    const [date, setDate] = useState(new Date())
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    useEffect(() => {
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

    if (mode) {
        return <>
            <p></p>
            {get2digitsString(date.getHours())}
            :{get2digitsString(date.getMinutes())}
            :{get2digitsString(date.getSeconds())}
        </>
    } else {
        return <>
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
}

