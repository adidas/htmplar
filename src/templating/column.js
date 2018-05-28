/**
 * column
 **/

import React from 'react';
import PropTypes from 'prop-types';

const Column = props => {
    const {children} = props;

    return (
        <td
            valign="top"
            className="htmplar-block-inner htmplar-cell"
        >
            {children}
        </td>
    );
};

Column.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired,
};

export default Column;