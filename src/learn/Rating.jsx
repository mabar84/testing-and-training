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
    </>
}
const StarsBody = () => {
    console.log('StarsBody')

    return <>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
    </>
}

const Star = () => {
    console.log('Star')

    return <>
        star&nbsp;
    </>
}