/**
 * row
 **/

import React from 'react';
import Column from './column';

const Row = props => {
    const {columns, children} = props;
    let cells = columns || children;

    cells = Array.isArray(cells) ? cells : [cells];

    return (
        <tr>
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

export default Row;