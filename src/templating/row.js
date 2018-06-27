/**
 * row
 **/

import React from 'react';
import Column from './column';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Row = props => {
    const {columns, children, className, valign, cellClasses} = props;
    let cells = columns || children;

    cells = Array.isArray(cells) ? cells : [cells];

    return (
        <tr className={classNames('htmplar-row', className)}>
            {cells.map((cell, index) => {
                let _className =
                    (cell.props && cell.props.className)
                        ? `${cell.props.className}-parent` : '';

                return (
                    <Column key={index} valign={valign} className={_className} cellClasses={cellClasses}>
                        {cell}
                    </Column>
                );
            })}
        </tr>
    );
};

Row.defaultProps = {
    valign: 'top',
    cellClasses: ''
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
        PropTypes.object,
        PropTypes.array
    ]),
    cellClasses: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array
    ]),
    valign: PropTypes.string
};

export default Row;