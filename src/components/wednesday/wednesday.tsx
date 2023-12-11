import React from 'react';

const Wednesday = () => {
    console.log('wednesday')

    // const counterCreator = () => {
    //     let count = 0
    //
    //     return () => {
    //         console.log(++count)
    //     }
    // }
    //
    // const c1 = counterCreator()
    // c1()
    // c1()
    // c1()
    // console.log('=======================')
    // const c2 = counterCreator()
    // c2()
    // c2()
    // c2()

    const pow: any = (x: number, n: number) => {
        if (n === 1) {
            return x
        } else {
            return x * pow(x, n - 1)
        }
    }

    console.log(pow(1, 8000))

    return (
        <div>
            wednesday
        </div>
    );
};

export default Wednesday;