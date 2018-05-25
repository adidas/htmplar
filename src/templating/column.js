/**
 * column
 **/

import React from 'react';

const Column = props => {
    const {children} = props;

    return (
        <td
            valign="top"
            className="htmplar-block-inner"
        >
            {children}
        </td>
    );
};

export default Column;