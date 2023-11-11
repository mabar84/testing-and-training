import React, {useState} from 'react';
import {styled} from 'styled-components';
import {UncontrolledOnOff} from './on-off/UncontrolledOnOff';
import {UncontrolledAccordion} from './uncontrolled-accordion/UncontrolledAccordion';
import {UncontrledRating} from './rating-for-monday3/UncontroledRating';
import {ControlledOnOff} from './on-off/ControlledOnOff';
import {ControlledRating, RatingType} from './rating-for-monday3/ControlledRating';
import {ControlledAccordion} from './controlled-accordion/ControlledAccordion';


type KabzdaMondayPropsType = {
    h1: string
    address: string
}

export const KabzdaMonday: React.FC<KabzdaMondayPropsType> = ({h1, ...restProps}) => {
    const [on, setOn] = useState<boolean>(true)
    const [n, setN] = useState<RatingType>(3)
    const [collapsed, setCollapsed] = useState(true)


    return (
        <StyledKabzdaMonday>
            <h1>{h1}</h1>
            <h2>Uncontrolled elements</h2>
            <br/>
            <UncontrolledOnOff q={{h1, ...restProps}}/>
            <br/>
            <br/>
            <UncontrledRating/>
            <br/>
            <UncontrolledAccordion title={'unControlAc'} items={['a1', 'b2', 'c3']}/>
            <br/>

            <h2>Controlled elements</h2>
            <ControlledOnOff on={on} setOn={setOn}/>
            <br/>
            <br/>
            <ControlledRating n={n} setN={setN}/>

            <ControlledAccordion
                title={'Controlled Accordion'}
                items={['1', '2', '3']}
                collapsed={collapsed}
                setCollapsed={() => setCollapsed(!collapsed)}
            />

        </StyledKabzdaMonday>
    );
};

const StyledKabzdaMonday = styled.div`
  padding: 20px;

  h1 {
    margin-top: 0;
  }
`