/**
 * button
 **/

import React from 'react';

const Button = (props) => {
    const {href, children, id} = props;
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

    return (<table className="button">
        <tr>
            {
                icon && icon.index === 0 ?
                    <td className="button-icon">{icon.component}</td>
                    : ''
            }
            <td className="button-text">
                <a href={href}>{text}</a>
            </td>
            {
                icon && icon.index === 1 ?
                    <td className="button-icon">{icon.component}</td>
                    : ''
            }
        </tr>
    </table>);
};

export default Button;