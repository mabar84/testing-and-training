import React from 'react';
import {Star} from "./Star";

export const Rating = () => {
    console.log('Rating rendering');
    return (
        <>
            <Star/>
            <Star/>
            <Star selected/>
            <Star/>
            <Star/>
        </>
    );
};

