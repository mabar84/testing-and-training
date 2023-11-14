import {useState} from "react";

type TRating = {
    title: string
}
export const UnControlledRating = ({title}: TRating) => {
    return <>
        <StarsTitle title={title}/>
        <StarsBody/>
    </>
}
const StarsTitle = ({title}: Pick<TRating, 'title'>) => {
    return <>
        <h2> {title} </h2>
        <br/>
    </>
}
const StarsBody = () => {
    const [value, setValue] = useState(0)

    const starCallBack = (value: 0 | 1 | 2 | 3 | 4 | 5) => {
        setValue(value)
    }
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