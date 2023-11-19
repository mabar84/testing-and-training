import '../../App.css'

type TOnOff = {
    on: boolean,
    // setOn: () => void
    setOn: (on: boolean) => void
}


export const OnOff = ({on, setOn}: TOnOff) => {
    //console.log(on)
    return <>
        <div className={'on-off'}>
            <div className={on ? 'green' : ''}>On</div>
            <div className={on ? '' : 'red'}>Off</div>
            {/*<div onClick={setOn}>{on ? <span>&#9735;</span> : 'х'} </div>*/}
            <div onClick={() => {
                setOn(on)
            }}>{on ? <span>&#9735;</span> : 'х'} </div>
            <div className={on ? 'green' : 'red'}></div>
        </div>
    </>
}