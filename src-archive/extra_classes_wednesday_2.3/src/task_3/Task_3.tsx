import {ChangeEvent, FC, memo, useMemo, useState} from 'react';
import {SlowComponent} from './slowComponent/SlowComponent';


//find the problem and fix it as part of composition optimization, memo, children

export const Task_3 = () => {
    console.log('Task_3')
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

    return (
        <div>
            <div>Lags when change value</div>
            <input type="text" value={value} onChange={onChange}/>
            {/*<AdditionalComponent>*/}
            {/*    <SlowComponent/>*/}
            {/*</AdditionalComponent>*/}
            <SlowComponent/>

        </div>
    );
};

type AdditionalComponentPropsType =  {
    children: React.ReactNode
}

const AdditionalComponent: FC<AdditionalComponentPropsType> =(props) => {
    return <>
        {
            useMemo(()=>{
                return <>
                    {props.children}
                </>
            },[])
        }

    </>
}