/**
 * button
 **/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = (props) => {
    const {href, children, id, isBlock} = props;
    let text, icon = null;

    children.forEach((child, index) => {
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
        <table className="htmplar-button" id={id}>
            <tr>
                <td className="htmplar-button-container">
                    <table className={classNames('htmplar-button-inner', {
                        'htmplar-button-block': isBlock
                    })}>
                        <tr>
                            <td className="htmplar-button-content">
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
    isBlock: false
};

Button.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.array,
    id: PropTypes.string,
    isBlock: PropTypes.bool
};

export default Button;