import React, {useEffect, useState} from 'react';

export const UseEffectCleanUp = () => {

    return <>
        <WithCounter/>
        <WithKeyPress/>
    </>

};

const WithCounter = () => {
    console.log('WithCounter')
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('useEffect starts with counter ', counter)
        return () => {
            console.log('useEffect cleanUp with counter ', counter)
        }
    }, [counter])
    return (
        <div>
            <button onClick={() => setCounter(state => state + 1)}>{counter}</button>
        </div>
    );
}


const WithKeyPress = () => {
    const [text, setText] = useState('')
    console.log('WithKeyPress rendered with text ', text)


    useEffect(() => {
        console.log('useEffect starts with text ', text)

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)
        return () => {
            console.log('useEffect cleanUp with text ', text)
            window.removeEventListener('keypress', handler)
        }
    }, [text])
    return (
        <div>
            Typed text: {text}
        </div>
    );
}