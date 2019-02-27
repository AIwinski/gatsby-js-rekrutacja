import styled from 'styled-components';

export const SectionStyled = styled.div`
    margin-top: 4rem;
    max-width: 100%;
    display: grid;
    grid-gap: 100px;
    grid-template-columns: ${props => props.reversed ? '1fr 2fr' : '2fr 1fr'};


    img {
        height: 100%;
        object-fit: cover;
        width: 100%;
        overflow: hidden;
        border-radius: 10px;
    }
`
