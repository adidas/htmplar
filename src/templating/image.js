/**
 * image
 **/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {createID, setMedium} from './utils';

const Image = (props) => {
    const {src, align, className, title, medium, id} = props;

    let availableIn = setMedium(medium);
    const _id = id === '' ? createID(props) : id;
    let imageSize = typeof src === 'object' ? '' : 'htmplar-image-all';

    return (
        typeof src === 'object' ?
            Object.keys(src).map(type => {
                const url = src[type];
                return (
                    <span key={type} id={`${_id}-${type}`} className={classNames('htmplar-image-container', className, 'htmplar-image-container-' + type)}>
                        <img align={align} src={url} alt={title}
                         className={classNames('htmplar-image', className, 'htmplar-image-' + type)}/>
                    </span>
                );
            }) :
            <img id={_id} align={align} src={src} alt={title}
                 className={classNames('htmplar-image', className, imageSize, availableIn)}/>
    );
};

Image.defaultProps = {
    align: 'center',
    medium: 'both',
    id: ''
};

Image.propTypes = {
    src: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]).isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string,
    align: PropTypes.string,
    medium: PropTypes.string,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

export default Image;