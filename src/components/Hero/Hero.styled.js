import styled from 'styled-components';

export const HeroStyled = styled.div`
    background: url(${props => props.imageUrl});
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    margin-bottom: 4rem;
`
