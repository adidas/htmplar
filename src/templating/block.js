/**
 * block
 **/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Row from './row';
import {setMedium} from './utils';

const Block = props => {
    const {children, className, align, valign, medium} = props;

    const availableIn = setMedium(medium);

    return (
        <table
            className={classNames('htmplar-block-outer', className, availableIn)}
            border="0"
            cellPadding={0}
            cellSpacing={0}
            width="100%"
        >
            <tr className="htmplar-block-outer-row">
                <td className="htmplar-block-container" valign={valign}>
                    <table
                        className={classNames('htmplar-block', className)}
                        border="0"
                        cellPadding={0}
                        cellSpacing={0}
                        align={align}
                    >
                        <Row columns={children} valign={valign}/>
                    </table>
                </td>
            </tr>
        </table>
    );
};

Block.defaultProps = {
    align: 'center',
    valign: 'top',
    medium: false
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
    align: PropTypes.string,
    valign: PropTypes.string,
    medium: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ])
};

export default Block;