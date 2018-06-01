/**
 * line
 **/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Line = props => {
    const {className, thickness} = props;

    return (
        <table className={classNames('htmplar-line-outer', className)}>
            <tr>
                <td className="htmplar-line-container">
                    <table className="htmplar-line-inner">
                        <tr>
                            <td className="htmplar-rule-container">
                                <hr className={
                                    classNames('htmplar-horizontal-rule', {
                                        'htmplar-thin-line': thickness === 'thin',
                                        'htmplar-medium-line': thickness === 'medium',
                                        'htmplar-thick-line': thickness === 'thick',
                                    })
                                }/>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    );
};

Line.defaultProps = {
    className: '',
    thickness: 'thin'
};

Line.propTypes = {
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    thickness: PropTypes.string
};

export default Line;