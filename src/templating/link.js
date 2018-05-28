/**
 * link
 **/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Link = props => {
    const {href, label, id, className, align, children} = props;

    const linkLabel = label || children;

    return (
        <table align={align} className={classNames('htmplar-link', className)}>
            <tr>
                <td>
                    <a href={href} id={id}>{linkLabel}</a>
                </td>
            </tr>
        </table>
    );
};

Link.defaultProps = {
    align: 'center'
};

Link.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    id: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ]),
    align: PropTypes.string,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

export default Link;