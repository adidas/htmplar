/**
 * button
 **/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = (props) => {
    const {href, children, id, isBlock, className} = props;
    let items = children, text, icon = null;

    if (typeof children === 'string') {
        items = [items];
    }

    items.forEach((child, index) => {
        if (typeof child === 'string') {
            text = child;
        }
        if (typeof child === 'object') {
            icon = {
                component: child,
                index
            };
        }
    });

    return (
        <table className={classNames('htmplar-button', className)} id={id}>
            <tr>
                <td className="htmplar-button-container htmplar-cell">
                    <table className={classNames('htmplar-button-inner', {
                        'htmplar-button-block': isBlock
                    })}>
                        <tr>
                            <td className="htmplar-button-content htmplar-cell">
                                <a href={href} className="htmplar-button-cta">
                                    {icon && icon.index === 0 ?
                                        <span className="htmplar-button-icon">{icon.component}</span>
                                        : ''
                                    }
                                    <span className="htmplar-button-text">
                                        {text}
                                    </span>
                                    {
                                        icon && icon.index === 1 ?
                                            <span className="htmplar-button-icon">{icon.component}</span>
                                            : ''
                                    }
                                </a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    );
};

Button.defaultProps = {
    href: '#',
    isBlock: false
};

Button.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string
    ]),
    id: PropTypes.string,
    isBlock: PropTypes.bool,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

export default Button;