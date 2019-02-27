import React from 'react';

import { SectionStyled } from './Section.styled';

const Section = (props) => {
    return (
        <SectionStyled {...props}>
            {props.children}
        </SectionStyled>
    )
}

export default Section;
