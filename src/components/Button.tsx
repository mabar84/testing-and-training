export const Button = (props: ButtonPropsType) => {
    return <>
        <button style={props.style}>123</button>
    </>
}

type ButtonPropsType = {
    style?: {
        backgroundColor?: string
    }
}