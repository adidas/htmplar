/**
 * row
 **/

import React from 'react';
import Column from './column';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Row = props => {
    const {columns, children, className} = props;
    let cells = columns || children;

    cells = Array.isArray(cells) ? cells : [cells];

    return (
        <tr className={classNames('htmplar-row', className)}>
            {cells.map((cell, index) => {
                return (
                    <Column key={index}>
                        {cell}
                    </Column>
                );
            })}
        </tr>
    );
};

Row.propTypes = {
    columns: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
        PropTypes.symbol,
        PropTypes.array,
        PropTypes.string
    ]),
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
        PropTypes.symbol,
        PropTypes.array,
        PropTypes.string
    ]),
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

export default Row;