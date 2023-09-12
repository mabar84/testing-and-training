import React, {useState, useMemo} from 'react';

export default {
    title: 'useMemo'
};

export const useMemoFactorial = () => {
    console.log('exampleWithFactorial rendered')

    const [a, setA] = useState<number>(1)
    const [b, setB] = useState<number>(1)

    let resultB = 1

    let resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 2; i <= a; i++) {
            let fake = 0
            while (fake < 50000000) {
                fake++
                let fakeValue = Math.random()
                fakeValue = fakeValue + 1
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 2; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input type="number" value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/> {a}!={resultA}
        <br/>
        <input type="number" value={b} onChange={(e) => setB(+(e.currentTarget.value))}/> {b}!={resultB}
    </>
}
