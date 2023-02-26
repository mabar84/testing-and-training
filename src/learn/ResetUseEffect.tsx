import React, {useEffect, useState} from "react";

export const ResetUseEffect = () => {
    const [counter, setCounter] = useState(1)
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

    return <>
        <h3>LearnUseEffect</h3>
        {text}
        <button onClick={() => setCounter(counter + 1)}>
            <span style={{display: 'block', marginTop: '-10px', fontSize: '40px'}}>+</span>
        </button>
    </>
}