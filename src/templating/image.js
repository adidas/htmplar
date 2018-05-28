/**
 * image
 **/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Image = (props) => {
    const {src, align, className} = props;
    return (
        <img align={align} src={src} className={classNames('htmplar-image', className)}/>
    );
};

Image.defaultProps = {
    align: 'center'
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    align: PropTypes.string,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

export default Image;