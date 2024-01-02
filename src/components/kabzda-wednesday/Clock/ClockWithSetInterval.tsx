import React, {useEffect, useState} from 'react';

export const ClockWithSetInterval = () => {
    // console.log('ClockWithSetInterval')
    // const [counter, setCounter] = useState(1)
    const [date, setDate] = useState(new Date())
    // const date = new Date

    const addZeroBeforeNum = (num: number) => num < 10 ? '0' + num : num

    const h = addZeroBeforeNum(date.getHours())
    const m = addZeroBeforeNum(date.getMinutes())
    const s = addZeroBeforeNum(date.getSeconds())


    useEffect(() => {
        const setInterval1Id = setInterval(() => {
            // setCounter(state => state + 1)
            console.log('tick')

            setDate(new Date())
        }, 1000)
        return () => clearInterval(setInterval1Id)
    }, [])

    return (
        <div>
            {/*{counter}*/}
            {h}:{m}:{s}
            {/*{h}:{m < 10 ? '0' + m : m}:{s < 10 ? '0' + s : s}*/}
        </div>
    );
};