/**
 * image
 **/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {setMedium} from './utils';

const Image = (props) => {
    const {src, align, className, title, medium} = props;

    let availableIn = setMedium(medium);

    return (
        <img align={align} src={src} alt={title} className={classNames('htmplar-image', className, availableIn)}/>
    );
};

Image.defaultProps = {
    align: 'center',
    medium: 'both'
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    align: PropTypes.string,
    medium: PropTypes.string,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

export default Image;