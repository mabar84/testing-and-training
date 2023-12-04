import React from 'react';

const Wednesday = () => {
    console.log('wednesday')

    const counterCreator = () => {
        let count = 0

        return () => {
            console.log(++count)
        }
    }

    const c1 = counterCreator()
    c1()
    c1()
    c1()
    console.log('=======================')
    const c2 = counterCreator()
    c2()
    c2()
    c2()


    return (
        <div>
            wednesday
        </div>
    );
};

export default Wednesday;