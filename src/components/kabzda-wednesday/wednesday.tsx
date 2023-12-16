import React from 'react';
import {ReactMemoDemo} from './react-memo-demo/ReactMemoDemo';

const Wednesday = () => {
    console.log('wednesday')


    return (
        <div>
            <h2>Wednesday</h2>
            <ReactMemoDemo/>
        </div>
    );
};

export default Wednesday;