import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../Navbar/Navbar';
import {GlobalStyle} from '../../styles/global';

const Layout = ({ children }) => {
    return (
        <div>
            <GlobalStyle></GlobalStyle>
            <Navbar></Navbar>
            {children}
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;