import sprite from '../img/sprite.svg'

export const Button = (props: ButtonPropsType) => {
    return <>
        <button style={props.style}>
            123

            <svg width="17" height="17">

                <use xlinkHref={`${sprite}#${props.iconId}`}>

                </use>
            </svg>

        </button>
    </>
}

type ButtonPropsType = {
    style?: {
        backgroundColor?: string,
    },
    iconId?: string
}