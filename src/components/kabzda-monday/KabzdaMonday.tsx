import React, {useState} from 'react';
import {UnContrloRating} from './rating-for-monday3/Rating';
import {styled} from 'styled-components';
import {OnOff} from './on-off/OnOff';
import {UncontrolledAccordion} from './uncontrolled-accordion/Accordion';

type KabzdaMondayPropsType = {
    h1: string
    address: string
}

export const KabzdaMonday: React.FC<KabzdaMondayPropsType> = ({h1, ...restProps}) => {

    let obj = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: 'Somova'
            }
        }
    }

    const {name, age, address: {street: {title}}} = obj
    let title2 = obj.address.street.title
    let [l1, ...rest] = obj.lessons
    console.clear()
    console.log(l1)
    console.log(rest)


    return (
        <StyledKabzdaMonday>
            <h1>{h1}</h1>

            <OnOff q={{h1, ...restProps}}/>
            <UncontrolledAccordion title={'unControlAc'} items={['a1', 'b2', 'c3']}/>


            {/*<UnContrloRating/>*/}

        </StyledKabzdaMonday>
    );
};

const StyledKabzdaMonday = styled.div`
  padding: 20px;

  h1 {
    margin-top: 0;
  }
`