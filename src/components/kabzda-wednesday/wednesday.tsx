import React from 'react';
import {ReactMemoDemo} from './ReactMemoDemo/ReactMemoDemo';
import {UseMemo} from './UseMemoUseCallback/UseMemo';

const Wednesday = () => {
    console.log('wednesday')


    return (
        <div>
            <h2>Wednesday</h2>
            <ReactMemoDemo/>
            <UseMemo/>
        </div>
    );
};

export default Wednesday;