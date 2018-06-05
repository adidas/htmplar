/**
 * text
 **/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {setMedium} from './utils';

const Text = props => {
    const {className, content, children, medium, id} = props;

    const text = content || children;
    const availableIn = setMedium(medium);

    return (
        <p id={id} className={classNames('htmplar-text', className, availableIn)}>
            {text}
        </p>
    );
};

Text.defaultProps = {
    className: '',
    medium: 'both',
    id: ''
};

Text.propTypes = {
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    id: PropTypes.string,
    medium: PropTypes.string,
    content: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
        PropTypes.symbol,
        PropTypes.array,
        PropTypes.string
    ])
};

export default Text;