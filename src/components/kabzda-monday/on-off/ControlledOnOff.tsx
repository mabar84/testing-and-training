import React, {useState} from 'react';
import {styled} from 'styled-components';

type ControlledOnOffPropsType = {
    on: boolean
    setOn: (on: boolean) => void
}

export const ControlledOnOff: React.FC<ControlledOnOffPropsType> = (props) => {
    const {on, setOn} = props

    return (
        <StyledOnOff>
            <span onClick={() => !on && setOn(true)} className={`on ${on && 'pressed'}`}>On</span>
            <span onClick={() => on && setOn(false)} className={`off ${!on && 'pressed'}`}>Off</span>
            <div className={`diod ${on && 'light'} `}></div>
        </StyledOnOff>
    );
};

const StyledOnOff = styled.div`

  display: flex;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 30px;
    border: 1px solid #000000;
    box-shadow: 0 2px gray;
    cursor: pointer;

    &.pressed {
      transform: translateY(2px);
      box-shadow: none;
    }
  }


  .diod {
    width: 30px;
    height: 30px;
    margin-left: 20px;
    border: 1px solid #000000;
    border-radius: 50%;
    background: #000;

    &.light {
      background: yellow;
    }
  }

`
