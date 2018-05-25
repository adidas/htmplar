/**
 * block
 **/

import React from 'react';
import Row from './row';

const Block = (props) => {
    const {children} = props;
    return (
        <table
            className="htmplar-block"
            border="0"
            cellPadding={0}
            cellSpacing={0}
            width="100%"
        >
            <Row columns={children}/>
        </table>
    );
};

export default Block;