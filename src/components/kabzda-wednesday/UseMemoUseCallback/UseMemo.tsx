import React, {ChangeEvent, useMemo, useState} from 'react';

export const UseMemo = () => {
    console.log('UseMemo')

    const [a, setA] = useState(1)
    const [b, setB] = useState(1)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            let temp = 0
            while (temp < 50000000) {
                temp++
                const value = Math.random()
            }
            resultA *= i
        }
        return resultA
    }, [a])


    // for (let i = 1; i <= a; i++) {
    //     let temp = 0
    //     while (temp < 50000000) {
    //         temp++
    //         const value = Math.random()
    //     }
    //     resultA *= i
    // }


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    const onChangeAHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('a changed')
        setA(+e.currentTarget.value)
    }
    const onChangeBHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('b changed')
        setB(+e.currentTarget.value)
    }

    return <>
        <h3>useMemo</h3>
        <input value={a} type={'number'} onChange={onChangeAHandler}/>
        <input value={b} type={'number'} onChange={onChangeBHandler}/>
        <div></div>
        {resultA} |||||||| {resultB}

    </>
}
