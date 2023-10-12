import {useEffect, useState} from "react";


const generateData = () => {
    console.log('generateData')
    return 100
}

export const LearnUseEffect = () => {
    const [fake, setFake] = useState(100)
    const [counter, setCounter] = useState(1)
    console.log('Example')

    useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString()
    }, [counter])

    return <>
        <h3>LearnUseEffect</h3>
        {counter} --------- {fake}
        <button onClick={() => setCounter(counter + 1)}>
            <span>+</span>
        </button>
    </>
}