import React, {memo, useState} from 'react';

export const QuestionAboutProfiler = () => {
    console.log('Parent log')
    const [counter, setCounter] = useState(0)

    return <>
        <h3>React.memo</h3>
        <button onClick={() => setCounter(c => c + 1)}>+</button>
        <WithMemo/>
        <WithMemo/>
        <WithMemo/>
        <WithoutMemo/>
        <WithoutMemo/>
        <WithoutMemo/>
    </>
}

const WithMemo = memo(() => {
    console.log('WithMemo log')
    return <div>
        <p>WithMemo</p>
    </div>
})

const WithoutMemo = () => {
    console.log('WithoutMemo log')
    return <div>
        <p>WithoutMemo</p>
    </div>
}