import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const TitleStyled = styled.div`
    ${props => props.hero ? HeroTitle : null};
    ${props => props.primary ? PrimaryTitle : null};
    ${props => props.secondary ? SecondaryTitle : null};
`

const HeroTitle = `
    font-size: 40px;
    text-transform: uppercase;
    color: ${colors.white};
    font-weight: normal;
`

const PrimaryTitle = `
    font-size: 24px;
    font-weight: bold;
    color: ${colors.black};
    text-transform: uppercase;
`

const SecondaryTitle = `
    font-size: 32px;
    font-weight: normal;
    color: ${colors.black};
    text-transform: none;
`