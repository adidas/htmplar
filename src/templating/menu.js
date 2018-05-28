/**
 * menu
 **/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from './link';

const Menu = props => {
    const {items, className, align} = props;

    return (
        <table align={align} className={classNames('htmplar-menu', className)}>
            <tr>
                <td>
                    {
                        items.map((item, index) => {
                            const {link, label, id} = item;

                            return (
                                <Link key={index} href={link} id={id} label={label} align="left"/>
                            );
                        })
                    }
                </td>
            </tr>
        </table>
    );
};

Menu.defaultProps = {
    align: 'center'
};

Menu.propTypes = {
    items: PropTypes.array.isRequired,
    align: PropTypes.string,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

export default Menu;