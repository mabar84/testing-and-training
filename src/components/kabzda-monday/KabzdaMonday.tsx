import React from 'react';
import {UnContrloRating} from './rating-for-monday3/Rating';
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


            <UnContrloRating/>

        </StyledKabzdaMonday>
    );
};

const StyledKabzdaMonday = styled.div`
  padding: 20px;

  h1 {
    margin-top: 0;
  }
`