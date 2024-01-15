import React, {useEffect, useState} from 'react';
import Switch from 'react-switch';

export const ClockWithSetInterval = () => {
    // console.log('ClockWithSetInterval')
    // const [counter, setCounter] = useState(1)
    const [date, setDate] = useState(new Date())
    const [isOn, setIsOn] = useState(false)
    // const date = new Date

    const addZeroBeforeNum = (num: number) => num < 10 ? '0' + num : num

    const h = addZeroBeforeNum(date.getHours())
    const m = addZeroBeforeNum(date.getMinutes())
    const s = addZeroBeforeNum(date.getSeconds())

    console.log(isOn)
    useEffect(() => {
        const setInterval1Id = setInterval(() => {
            // setCounter(state => state + 1)
            console.log('tick')

            setDate(new Date())
        }, 1000)
        return () => clearInterval(setInterval1Id)
    }, [])

    return (
        <div>

            {/*{counter}*/}
            {/*{h}:{m}:{s}*/}
            {/*{h}:{m < 10 ? '0' + m : m}:{s < 10 ? '0' + s : s}*/}
            <div>Переключатель со стрелочных на цифровые</div>

            <MySwitch setIsOn={setIsOn} isOn={false}/>
            {isOn ? <div>{h}:{m}:{s}</div>
                : <ClockWithArrows/>}


            <br/>

        </div>
    );
};


type MySwitchPropsType = {
    isOn: boolean
    setIsOn: (isOn: boolean) => void
}

const MySwitch: React.FC<MySwitchPropsType> = (props) => {
    const [checked, setChecked] = useState(props.isOn);

    const handleChange = (checked: boolean) => {
        setChecked(checked);
        props.setIsOn(checked)
    };

    return (
        <Switch
            checked={checked}
            onChange={handleChange}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 1px 5px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
        />
    );
}

const ClockWithArrows = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourStyle: any = {
        transform: `rotate(${(hours % 12) * 30 + minutes / 2}deg)`,
        transformOrigin: 'bottom',
        backgroundColor: 'black',
        width: '4px',
        height: '80px',
        position: 'absolute',
        top: '55%',
        left: '50%',
        marginTop: '-40px',
        marginLeft: '-2px',
        transition: 'transform 0.5s ease-in-out',
        zIndex: '10',
    };

    const minuteStyle: any = {
        transform: `rotate(${minutes * 6}deg)`,
        transformOrigin: 'bottom',
        backgroundColor: 'black',
        width: '3px',
        height: '100px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: '-50px',
        marginLeft: '-1.5px',
        transition: 'transform 0.5s ease-in-out',
        zIndex: '20',
    };

    const secondStyle: any = {
        transform: `rotate(${seconds * 6}deg)`,
        transformOrigin: 'bottom',
        backgroundColor: 'red',
        width: '2px',
        height: '120px',
        position: 'absolute',
        top: '46%',
        left: '50%',
        marginTop: '-60px',
        marginLeft: '-1px',
        transition: 'transform 0.5s ease-in-out',
        zIndex: '30',
    };

    return (
        <div style={{position: 'relative', width: '200px', height: '200px'}}>
            <div style={hourStyle}></div>
            <div style={minuteStyle}></div>
            <div style={secondStyle}></div>
        </div>
    );
};