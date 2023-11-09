import React, {useEffect, useState} from "react";

export const ResetUseEffect = () => {
    const [counter, setCounter] = useState(0)
    const [text, setText] = useState('')
    console.log('Component rendered with ' + counter)

    useEffect(() => {
        const keypressHandler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
            // setText((state) => state + e.key)
        }

        console.log('Effect occurred with ' + counter)
        window.addEventListener('keypress', keypressHandler)

        return () => {
            console.log('Reset effect with ' + counter)
            window.removeEventListener('keypress', keypressHandler)
        }
    }, [text])
    console.log(text)

    const setLocalStorageHandler = () => {
        localStorage.setItem('counter', counter.toString())
    }
    const getLocalStorageHandler = () => {
        let counterFromStorage = localStorage.getItem('counter')
        if (counterFromStorage) {
            setText(counterFromStorage)
            localStorage.clear()
        }
    }

    return <>
        <h3>LearnUseEffect</h3>
        {text}
        <br/>
        {counter}
        <br/>
        <button onClick={() => setCounter(counter + 1)}>
            <span style={{display: 'block', marginTop: '0px', fontSize: '40px'}}>+</span>
        </button>
        <button onClick={setLocalStorageHandler}>setLocalStorage</button>
        <button onClick={getLocalStorageHandler}>getLocalStorage</button>
        <button onClick={() => setCounter(0)}>clearCounter</button>
    </>
}