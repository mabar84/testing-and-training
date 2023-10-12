import React, {useEffect, useState} from "react";
import {clearInterval} from "timers";

export const LearnUseEffectSetTimeoutSetInterval = () => {
    const [fake, setFake] = useState(100)
    const [counter, setCounter] = useState(1)
    console.log('LearnUseEffectSetTimeoutSetInterval')
    const time = new Date
    const hours = time.getHours()
    const min = time.getMinutes()
    const sec = time.getSeconds()
    useEffect(() => {
        console.log('useEffect')

        const intervalId = setInterval(() => {
            // setCounter(counter => counter + 1)
            console.log('tick', counter)

        }, 1000)

    }, [])


    return <>
        {hours}:{min < 10 ? '0' + min : min}:{sec < 10 ? '0' + sec : sec}
        <h3>LearnUseEffect</h3>
        counter {counter} --------- fake {fake}
        {/*<button onClick={() => setCounter(counter + 1)}>*/}
        {/*    <span>+</span>*/}
        {/*</button>*/}
    </>
}