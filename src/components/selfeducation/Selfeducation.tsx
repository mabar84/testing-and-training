import React, {useState} from 'react';
import {Button} from '../Button';
import {SelectChangeEvent} from '@mui/material';
import {Rating, TRatingValue} from '../../../old-src/learn/Rating/Rating';
import {OnOff} from '../../../old-src/learn/OnOff/OnOff';
import {Accordion} from '../../../old-src/learn/Accordion/Accordion';
import {CustomSelect} from '../../../old-src/learn/Select/Select';
import ColorPicker from '../../../old-src/learn/ColorPicker/ColorPicker';


export const Selfeducation = () => {

    const [on, setOn] = useState<boolean>(true);
    const onSwitch = () => {
        setOn(!on);
    };

    const onClick = (message: any) => {
        alert(`item №${message} was clicked`);
    };

    const [selectedValue, setSelectedValue] = useState<string>('');
    const onChangeSelectHandler = (e: SelectChangeEvent) => {
        setSelectedValue(e.target.value);
        console.log(e.target.value);
    };

    const accordionItems = [
        {text: 'Petr', id: 1},
        {text: 'Nicolay', id: 2},
        {text: 'Alexander', id: '3'},
    ];
    const selectItems = [
        {text: 'Petr', id: 1},
        {text: 'Nicolay', id: 2},
        {text: 'Alexander', id: '3'},
    ];

    const [ratingValue, setRatingValue] = useState<TRatingValue>(0);
    const starCallBack = (value: TRatingValue) => {
        console.log(value);
        setRatingValue(value);
    };

//
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const accordionSwitch = () => {
        console.log(123)
        setCollapsed(!collapsed);
    };
    return (
        <>

            <OnOff on={on} setOn={onSwitch}/>
            <Accordion title={'Accordion'} collapsed={collapsed} accordionSwitch={accordionSwitch}
                       onClick={onClick} accordionItems={accordionItems}/>

            <Rating value={ratingValue} title={'Rating'} starCallBack={starCallBack}/>
            <br/>
            <CustomSelect title={'SomeTitle'} value={selectedValue} selectItems={selectItems}
                          onChange={onChangeSelectHandler}/>
            <ColorPicker/>
            <Button iconId="coins" style={{backgroundColor: 'yellow'}}/>
            <Button iconId="clock" style={{backgroundColor: 'skyblue'}}/>
        </>
    );
};