import React from 'react';
import styled from 'styled-components';


type AccordionBodyPropsType = {
    items: string[]
    callBack: (itemName: string) => void
}

export const AccordionBody = (props: AccordionBodyPropsType) => {
    console.log('AccordionBody rendering');

    const onClickHandler = (itemName: string) => {
        props.callBack(itemName)
    }

    return (
        <StyledAccordionBody>
            {props.items.map((el, ind) => {
                return <li onClick={() => onClickHandler(el)} key={ind}>{el}</li>
            })}
        </StyledAccordionBody>
    );
};

const StyledAccordionBody = styled.ul`
  li {
    list-style: none;
  }

`