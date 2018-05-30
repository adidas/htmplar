/**
 * block
 **/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Row from './row';

const Block = (props) => {
    const {children, className, align} = props;

    return (
        <table
            className={classNames('htmplar-block-outer', className)}
            border="0"
            cellPadding={0}
            cellSpacing={0}
            width="100%"
        >
            <tr className="htmplar-block-outer-row">
                <td className="htmplar-block-container">
                    <table
                        className={classNames('htmplar-block', className)}
                        border="0"
                        cellPadding={0}
                        cellSpacing={0}
                        align={align}
                    >
                        <Row columns={children}/>
                    </table>
                </td>
            </tr>
        </table>
    );
};

Block.defaultProps = {
    align: 'center'
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
    ]),
    align: PropTypes.string
};

export default Block;