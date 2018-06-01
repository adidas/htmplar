/**
 * headline
 **/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {setMedium} from './utils';

const Headline = props => {
    const {className, children, medium, id} = props;

    const availableIn = setMedium(medium);

    return (
        <h1 id={id} className={classNames('htmplar-headline', className, availableIn)}>{children}</h1>
    );
};

Headline.propTypes = {
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    id: PropTypes.string,
    medium: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
        PropTypes.symbol,
        PropTypes.array,
        PropTypes.string
    ])
};

export default Headline;