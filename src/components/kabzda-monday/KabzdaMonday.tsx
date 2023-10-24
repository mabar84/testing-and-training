import React, {useState} from 'react';
import {Rating} from '../rating/Rating';
import {Accordion} from '../accordion/Accordion';
import {styled} from 'styled-components';
import {OnOff} from './on-off/OnOff';
import {UncontrolledAccordion} from './uncontrolled-accordion/Accordion';


type KabzdaMondayPropsType = {
    h1: string
}

export const KabzdaMonday: React.FC<KabzdaMondayPropsType> = ({h1}) => {

    return (
        <StyledKabzdaMonday>
            <h1>{h1}</h1>

            <OnOff/>

            <UncontrolledAccordion title={'unControlAc'} items={['a1', 'b2', 'c3']}/>
        </StyledKabzdaMonday>

    );
};

const StyledKabzdaMonday = styled.div`
  padding: 20px;

  h1 {
    margin-top: 0;
  }

`