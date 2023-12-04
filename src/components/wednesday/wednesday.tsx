import React from 'react';

const Wednesday = () => {
    console.log('wednesday')

    const counterCreator = () => {
        let count = 0
        console.log(count)

        return () => {
            console.log(count++)
        }
    }

    const c1 = counterCreator()
    c1()
    c1()
    c1()

    // counterCreator()
    // counterCreator()
    // counterCreator()

    return (
        <div>
            wednesday
        </div>
    );
};

export default Wednesday;