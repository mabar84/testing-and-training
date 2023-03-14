import React, {useEffect, useState} from "react";
import {FormControlLabel, Switch} from "@mui/material";

type PropsType = {}

const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const AnalogClock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        console.log('useEffect')

        const intervalId = setInterval(() => {
            console.log(intervalId)
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
            console.log('alert===================')
        }
    }, [])

    let label = {
        'age': '23'
    }
    return <>

        <FormControlLabel control={<Switch color="default"/>} label="digital / analog"/>

        {get2digitsString(date.getHours())}
        :{get2digitsString(date.getMinutes())}
        :{get2digitsString(date.getSeconds())}
        <h3>LearnUseEffect</h3>
    </>
}