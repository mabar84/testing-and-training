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
    const [value, setValue] = useState(0)

    return <>
        <Star selected={value > 0}/>
        <button onClick={() => {
            setValue(1)
        }}>1
        </button>
        <Star selected={value > 1}/>
        <button onClick={() => {
            setValue(2)
        }}>2
        </button>
        <Star selected={value > 2}/>
        <button onClick={() => {
            setValue(3)
        }}>3
        </button>
        <Star selected={value > 3}/>
        <button onClick={() => {
            setValue(4)
        }}>4
        </button>
        <Star selected={value > 4}/>
        <button onClick={() => {
            setValue(5)
        }}>5
        </button>
    </>
}

type TStar = {
    selected: boolean
}

const Star = ({selected}: TStar) => {
    console.log('Star')
    if (selected) {
        return <b>
            star&nbsp;
        </b>
    } else {
        return <>star&nbsp;</>
    }
}