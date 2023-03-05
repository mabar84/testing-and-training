type TRating = {
    value: 0 | 1 | 2 | 3 | 4 | 5
    title: string
}

export const Rating = (props: TRating) => {
    console.log('rating')
    console.log(props)

    return <>
        <StarsTitle title={props.title}/>
        <StarsBody value={props.value}/>
    </>
}
type TStarsTitle = {
    title: string
}
const StarsTitle = (props: TStarsTitle) => {
    console.log('StarsTitle')
    return <>
        <h2> {props.title} </h2>
        {/*<Star selected={true}/>*/}
        {/*<Star selected={false}/>*/}
        <br/>
    </>
}
type TStarsBody = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
const StarsBody = (props: TStarsBody) => {
    console.log('StarsBody')
    const arr = []
    for (let i = 0; i < props.value; i++) {
        arr.push(<Star selected={true} key={i}/>)
    }
    for (let i = props.value; i < 5; i++) {
        arr.push(<Star selected={false} key={i}/>)
    }
    return <>
        {arr}
    </>
}

type TStar = {
    selected: boolean
}

const Star = (props: TStar) => {
    console.log('Star')
    if (props.selected) {
        return <b>
            star&nbsp;
        </b>
    } else {
        return <>star&nbsp;</>
    }
}