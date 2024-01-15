import React from 'react';
import styled from 'styled-components';

type AccordionTitlePropsTitle = {
    title: string,
    onClickAccordionTitleHandler: () => void
}

export const AccordionTitle: React.FC<AccordionTitlePropsTitle> =
    ({title, onClickAccordionTitleHandler}) => {
        // console.log('AccordionTitle rendering');

        return (
            <StyledAccordionTitle onClick={onClickAccordionTitleHandler}>
                {title}
            </StyledAccordionTitle>
        );
    };

const StyledAccordionTitle = styled.h3`
  margin-bottom: 0;
  cursor: pointer;
`
