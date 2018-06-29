/**
 * link
 **/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {setMedium, createID} from './utils';

const Link = props => {
    const {href, label, id, className, align, children, medium, allCaps} = props;

    const linkLabel = label || children;

    const availableIn = setMedium(medium);
    const _id = id === '' ? createID(props) : id;

    return (
        <table
            align={align}
            className={
                classNames(
                    'htmplar-link', className, availableIn,
                    {
                        'htmplar-all-caps': allCaps
                    }
                )
            }
            border="0"
            cellPadding={0}
            cellSpacing={0}
        >
            <tr>
                <td>
                    <a href={href} id={_id}>{linkLabel}</a>
                </td>
            </tr>
        </table>
    );
};

Link.defaultProps = {
    align: 'left',
    href: '#',
    medium: 'both',
    allCaps: false
};

Link.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    id: PropTypes.string.isRequired,
    medium: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
        PropTypes.array
    ]),
    align: PropTypes.string,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    allCaps: PropTypes.bool
};

export default Link;