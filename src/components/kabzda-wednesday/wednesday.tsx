import React from 'react';
import {ClockWithSetInterval} from './Clock/ClockWithSetInterval';

const Wednesday = () => {
    console.log('wednesday')


    return (
        <div>
            {/*<h2>Wednesday</h2>*/}
            {/*<ReactMemoDemo/>*/}
            {/*<UseMemo/>*/}
            <ClockWithSetInterval/>
            {/*<QuestionAboutProfiler/>*/}
        </div>
    );
};

export default Wednesday;