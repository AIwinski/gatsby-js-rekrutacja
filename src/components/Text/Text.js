import React from 'react';

import { TextStyled } from './Text.styled';

const Text = ({ children }) => {
    return (
        <TextStyled>
            {children}
        </TextStyled>
    )
}

export default Text;
