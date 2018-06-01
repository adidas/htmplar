/**
 * menu
 **/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from './link';
import {setMedium} from './utils';

const Menu = props => {
    const {items, className, align, medium} = props;

    const availableIn = setMedium(medium);

    return (
        <table align={align} className={classNames('htmplar-menu', className, availableIn)}>
            <tr>
                <td className="htmplar-menu-container">
                    {
                        items.map((item, index) => {
                            const {link, label, id, medium} = item;

                            return (
                                <Link key={index} href={link} id={id} label={label} align="left" medium={medium}/>
                            );
                        })
                    }
                </td>
            </tr>
        </table>
    );
};

Menu.defaultProps = {
    align: 'center',
    medium: 'both'
};

Menu.propTypes = {
    items: PropTypes.array.isRequired,
    align: PropTypes.string,
    medium: PropTypes.string,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array
    ])
};

export default Menu;