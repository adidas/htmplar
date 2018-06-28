/**
 * block
 **/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Row from './row';
import {setMedium} from './utils';

const Block = props => {
    const {children, className, align, valign, medium, cellClasses, isResponsive} = props;

    const availableIn = setMedium(medium);
    let cellClass = cellClasses;
    let outerClassName = className;

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

    if (typeof outerClassName === 'string' && outerClassName.length > 0) {
        outerClassName += '-outer';
    }

    if (Array.isArray(outerClassName)) {
        outerClassName = outerClassName
            .filter(classname => typeof classname !== 'undefined' && classname.length > 0)
            .map(classname => classname + '-outer');
    }

    return (
        <table
            className={
                classNames('htmplar-block-outer', outerClassName, availableIn)
            }
            border="0"
            cellPadding={0}
            cellSpacing={0}
            width="100%"
        >
            <tr className="htmplar-block-outer-row">
                <td className="htmplar-block-container" valign={valign}>
                    {align === 'center' ?
                        `
                        <!--[if (gte mso 9)|(IE)]>
                            <table align="center" border="0" cellspacing="0" cellpadding="0" width="640" style="width:640px;">
                                <tr>
                                    <td align="center" valign="top" width="640" style="width:640px;">
                        <![endif]-->` :
                        ''
                    }
                    <table
                        className={classNames('htmplar-block', className)}
                        border="0"
                        cellPadding={0}
                        cellSpacing={0}
                        align={align}
                    >
                        <Row columns={children} valign={valign} cellClasses={cellClass}/>
                    </table>
                    {align === 'center' ?
                        `
                        <!--[if mso]>
                                </td>
                            </tr>
                        </table>
                        <![endif]-->
                        ` :
                        ''
                    }
                </td>
            </tr>
        </table>
    );
};

Block.defaultProps = {
    align: 'center',
    valign: 'top',
    medium: false,
    cellClasses: '',
    isResponsive: false
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
    medium: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    isResponsive: PropTypes.bool
};

export default Block;