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
    let imageSize = typeof src === 'object' ? '' : 'htmplar-image-all';

    return (
        typeof src === 'object' ?
            Object.keys(src).map(type => {
                const url = src[type];
                return (
                    <img key={type} align={align} src={url} alt={title}
                         className={classNames('htmplar-image', className, 'htmplar-image-' + type)}/>
                );
            }) :
            <img align={align} src={src} alt={title}
                 className={classNames('htmplar-image', className, imageSize, availableIn)}/>
    );
};

Image.defaultProps = {
    align: 'center',
    medium: 'both'
};

Image.propTypes = {
    src: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]).isRequired,
    title: PropTypes.string.isRequired,
    align: PropTypes.string,
    medium: PropTypes.string,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

export default Image;