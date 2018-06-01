/**
 * column
 **/

import React from 'react';
import PropTypes from 'prop-types';

const Column = props => {
    const {children, valign} = props;

    return (
        <td
            valign={valign}
            className="htmplar-block-inner htmplar-cell"
        >
            {children}
        </td>
    );
};

Column.defaultProps = {
    valign: 'top'
};

Column.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.symbol,
        PropTypes.func,
        PropTypes.array,
        PropTypes.string
    ]).isRequired,
    valign: PropTypes.string
};

export default Column;