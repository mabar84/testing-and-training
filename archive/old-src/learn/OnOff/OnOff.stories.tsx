import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {OnOff} from "./OnOff";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'OnOff',
    component: OnOff
}

// const callback = action('click on switch')
// const callback = action('sdf')

const callback = action('switch clicked')

export const OnOffTrue = () => <OnOff on={true} setOn={callback}/>
export const OnOffFalse = () => <OnOff on={false} setOn={callback}/>

export const OnOffSwitch = () => {
    const [on, setOn] = useState(false)
    const callback = () => {
        setOn(!on)
    }
    return <OnOff on={on} setOn={callback}/>
}
