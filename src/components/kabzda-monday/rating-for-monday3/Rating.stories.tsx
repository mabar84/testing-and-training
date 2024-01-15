import type {Meta, StoryObj} from '@storybook/react';
import {ControlledRating, RatingType} from './ControlledRating';
import React, {useState} from 'react';
import {ControlledStar} from './ControlledStar';

const meta: Meta<typeof ControlledRating> = {
    component: ControlledRating,
};

export default meta;

type Story = StoryObj<typeof ControlledRating>;

export const ControlledRating0 = () => {
    const [n, setN] = useState<RatingType>(0)
    let starArr: RatingType[] = [1, 2, 3, 4, 5]

    return <div>
        {starArr.map((el, ind) => {
            return <ControlledStar setN={setN} value={el} key={ind} selected={el <= n}/>;
        })}
    </div>
};
export const ControlledRating5 = () => {
    const [n, setN] = useState<RatingType>(5)
    let starArr: RatingType[] = [1, 2, 3, 4, 5]

    return <div>
        {starArr.map((el, ind) => {
            return <ControlledStar setN={setN} value={el} key={ind} selected={el <= n}/>;
        })}
    </div>
};


