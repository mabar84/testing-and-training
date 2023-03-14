import '../../App.css'

type PropsType = {
    on?: boolean
}


export const OnOff: React.FC<PropsType> = ({on}) => {

    return <>
        <div className={'on-off'}>
            <div className={on ? 'green' : ''}>On</div>
            <div className={on ? '' : 'red'}>Off</div>
            <div></div>
            <div className={on ? 'green' : 'red'}></div>
        </div>
    </>
}