import React, {useEffect, useState} from 'react';

export const UseEffectCleanUp = () => {
    console.log('UseEffectCleanUp')
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
};