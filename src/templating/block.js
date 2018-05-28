/**
 * block
 **/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Row from './row';

const Block = (props) => {
    const {children, className} = props;

    return (
        <table
            className={classNames('htmplar-block', className)}
            border="0"
            cellPadding={0}
            cellSpacing={0}
            width="100%"
        >
            <Row columns={children}/>
        </table>
    );
};

Block.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
        PropTypes.symbol,
        PropTypes.array,
        PropTypes.string
    ]).isRequired,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

export default Block;