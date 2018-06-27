/**
 * table
 **/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Row from './row';

const Table = props => {
    const {className, children, align, valign, columns, cellClasses, isResponsive} = props;
    let cols = columns !== null ? columns : children;

    let cellClass = cellClasses;

    if (isResponsive) {
        if (typeof cellClasses === 'string') {
            cellClass = `${cellClass} htmplar-mobile-row`.trim();
        }

        else if (Array.isArray(cellClasses)) {
            cellClass.push('htmplar-mobile-row');
        }

        else if (typeof cellClasses === 'object') {
            cellClass['htmplar-mobile-row'] = true;
        }
    }

    return (
        <table
            className={classNames('htmplar-block', className)}
            border="0"
            cellPadding={0}
            cellSpacing={0}
            align={align}
        >
            <Row columns={cols} valign={valign} cellClasses={cellClass}/>
        </table>
    );
};

Table.defaultProps = {
    align: 'middle',
    valign: 'top',
    columns: null,
    isResponsive: false
};

Table.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
        PropTypes.symbol,
        PropTypes.array,
        PropTypes.string
    ]),
    columns: PropTypes.oneOfType([
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
    align: PropTypes.string,
    valign: PropTypes.string,
    isResponsive: PropTypes.bool
};

export default Table;