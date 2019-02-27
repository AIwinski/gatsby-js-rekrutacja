import React from 'react';
import PropTypes from 'prop-types';

import { TitleStyled } from './Title.styled';

const Title = (props) => {
    return (
        <TitleStyled {...props}>
            {props.children}
        </TitleStyled>
    )
}

// Title.propTypes = {
//     as: PropTypes.isRequired
// }

export default Title;
