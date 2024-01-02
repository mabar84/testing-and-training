import React from 'react';
import {ClockWithSetInterval} from './Clock/ClockWithSetInterval';
import {QuestionAboutProfiler} from './QuestionAboutProfiler/QuestionAboutProfiler';
import {UseEffectCleanUp} from './useEffectCleanUp/useEffectCleanUp';

const Wednesday = () => {
    console.log('wednesday')


    return (
        <div>
            {/*<h2>Wednesday</h2>*/}
            {/*<ReactMemoDemo/>*/}
            {/*<UseMemo/>*/}
            {/*<ClockWithSetInterval/>*/}
            {/*<QuestionAboutProfiler/>*/}
            <UseEffectCleanUp/>
        </div>
    );
};

export default Wednesday;