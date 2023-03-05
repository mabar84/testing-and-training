export const Rating = () => {
    console.log('rating')
    return <>
        <StarsTitle/>
        <StarsBody/>
        <StarsTitle/>
    </>
}

const StarsTitle = () => {
    console.log('StarsTitle')
    return <>
        <h2>StarsTitle</h2>
        <Star selected={true}/>
        <Star selected={false}/>
    </>
}
const StarsBody = () => {
    console.log('StarsBody')

    return <>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
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