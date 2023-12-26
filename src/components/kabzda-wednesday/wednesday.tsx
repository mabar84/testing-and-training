import React from 'react';
import {ReactMemoDemo} from './ReactMemoDemo/ReactMemoDemo';
import {UseMemo} from './UseMemoUseCallback/UseMemo';
import {ClockWithSetInterval} from './ClockWithSetInterval';
import {QuestionAboutProfiler} from './QuestionAboutProfiler/QuestionAboutProfiler';

const Wednesday = () => {
    console.log('wednesday')


    return (
        <div>
            {/*<h2>Wednesday</h2>*/}
            {/*<ReactMemoDemo/>*/}
            {/*<UseMemo/>*/}
            {/*<ClockWithSetInterval/>*/}
            <QuestionAboutProfiler/>
        </div>
    );
};

export default Wednesday;