import React from 'react';

import { HeroStyled } from './Hero.styled';
import Title from '../Title/Title';

const Hero = ({ children, imageUrl }) => {
    return (
        <HeroStyled imageUrl={imageUrl}>
            <Title hero as="h1">
                {children}
            </Title>
        </HeroStyled>
    )
}

export default Hero;
