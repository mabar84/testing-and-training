import {useState} from "react";

type TRating = {
    title: string
}

export const UnControlledRating = ({title}: TRating) => {
    console.log('rating')
    return <>
        <StarsTitle title={title}/>
        <StarsBody/>
    </>
}
const StarsTitle = ({title}: Pick<TRating, 'title'>) => {
    console.log('StarsTitle')
    return <>
        <h2> {title} </h2>
        <br/>
    </>
}
const StarsBody = () => {
    console.log('StarsBody')
    const [value, setValue] = useState(2)

    const starCallBack = (keys: number) => {
        setValue(keys)
    }

    return <>
        <Star selected={value > 0} starCallBack={starCallBack} keys={1}/>
        <Star selected={value > 1} starCallBack={starCallBack} keys={2}/>
        <Star selected={value > 2} starCallBack={starCallBack} keys={3}/>
        <Star selected={value > 3} starCallBack={starCallBack} keys={4}/>
        <Star selected={value > 4} starCallBack={starCallBack} keys={5}/>
    </>
}

type TStar = {
    selected: boolean,
    starCallBack: (e: number) => void,
    keys: number
}

const Star = ({starCallBack, keys, selected}: TStar) => {
    return <>
        {selected
            ? <span onClick={() => {
                starCallBack(keys)
            }} style={{fontWeight: 'bold'}}>STAR </span>
            : <span onClick={() => {
                starCallBack(keys)
            }}>star </span>
        }
    </>
}