import React, {useEffect, useState} from 'react';

export const ClockWithSetInterval = () => {
    // console.log('ClockWithSetInterval')
    const [counter, setCounter] = useState(1)
    const date = new Date
    const h = date.getHours()
    const m = date.getMinutes()
    const s = date.getSeconds()
    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])
    return (
        <div>
            {/*{counter}*/}
            {h}:{m < 10 ? '0' + m : m}:{s < 10 ? '0' + s : s}
        </div>
    );
};