type TRating = {
    value: 0 | 1 | 2 | 3 | 4 | 5
    title: string
}

export const Rating = ({value, title}: TRating) => {
    console.log('rating')
    return <>
        <StarsTitle title={title}/>
        <StarsBody value={value}/>
    </>
}
const StarsTitle = ({title}: Pick<TRating, 'title'>) => {
    console.log('StarsTitle')
    return <>
        <h2> {title} </h2>
        <br/>
    </>
}
const StarsBody = ({value}: Omit<TRating, 'title'>) => {
    console.log('StarsBody')
    const arr = []
    for (let i = 0; i < value; i++) {
        arr.push(<Star selected={true} key={i}/>)
    }
    for (let i = value; i < 5; i++) {
        arr.push(<Star selected={false} key={i}/>)
    }
    return <>
        {arr}
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