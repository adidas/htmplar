/**
 * image
 **/

import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
    const {src} = props;
    return (
        <img align="center" src={src} className="htmplar-image"/>
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired
};

export default Image;