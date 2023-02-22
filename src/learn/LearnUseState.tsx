import {useState} from "react";


const generateData = () => {
    console.log('generateData')
    return 100
}

export const LearnUseState = () => {
    console.log('Example')
    //
    // const changer=(state22:any)=>{
    //     return state22+1
    // }

    const [counter, setCounter] = useState(generateData)

    return <>
        <h3>LearnUseState</h3>
        {counter}
        <button onClick={() => setCounter(counter => counter + 1)}>
            <span>+</span>
        </button>
    </>
}