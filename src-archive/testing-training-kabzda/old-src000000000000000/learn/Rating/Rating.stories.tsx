import React, {useState} from 'react';
import {Rating, TRatingValue} from "./Rating";

export default {
    title: 'Rating',
    component: Rating
}

export const Rating0 = () => <Rating title={'Rating0'} value={0} starCallBack={x => x}/>
export const Rating1 = () => <Rating title={'Rating1'} value={1} starCallBack={x => x}/>
export const Rating2 = () => <Rating title={'Rating2'} value={2} starCallBack={x => x}/>
export const Rating3 = () => <Rating title={'Rating3'} value={3} starCallBack={x => x}/>
export const Rating4 = () => <Rating title={'Rating4'} value={4} starCallBack={x => x}/>
export const Rating5 = () => <Rating title={'Rating5'} value={5} starCallBack={x => x}/>

export const RatingSwitch = () => {

    const [ratingValue, setRatingValue] = useState<TRatingValue>(0)

    return <Rating value={ratingValue} title={'RatingSwitch'} starCallBack={setRatingValue}/>
}
