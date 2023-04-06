import {useState} from "react";

export type TRatingValue = 0 | 1 | 2 | 3 | 4 | 5


export type TRating = {
    title: string,
    value: TRatingValue
    starCallBack: (value: TRatingValue) => void
}


export const Rating = ({title, starCallBack, value}: TRating) => {
    return <>
        <StarsTitle title={title}/>
        <StarsBody starCallBack={starCallBack} title={title} value={value}/>
    </>
}
const StarsTitle = ({title}: Pick<TRating, 'title'>) => {
    return <>
        <h2> {title} </h2>
        <br/>
    </>
}
const StarsBody = ({starCallBack, value}: TRating) => {
    return <>
        <Star selected={value > 0} starCallBack={() => {
            starCallBack(1)
        }}/>
        <Star selected={value > 1} starCallBack={() => {
            starCallBack(2)
        }}/>
        <Star selected={value > 2} starCallBack={() => {
            starCallBack(3)
        }}/>
        <Star selected={value > 3} starCallBack={() => {
            starCallBack(4)
        }}/>
        <Star selected={value > 4} starCallBack={() => {
            starCallBack(5)
        }}/>
    </>
}
type TStar = {
    selected: boolean,
    starCallBack: () => void
}
const Star = ({starCallBack, selected}: TStar) => {
    return <>
        <span onClick={starCallBack}> {selected ? <b>STAR </b> : 'star '} </span>
    </>
}