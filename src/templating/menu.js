// menu

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from './link';
import { createID, setMedium } from './utils';

const Menu = (props) => {
  const { items, className, align, medium, id } = props;

  const availableIn = setMedium(medium);
  const _id = id === '' ? createID(props) : id;

  return (
    <table id={ _id }
        align={ align }
        className={ classNames('htmplar-menu', className, availableIn) }
        border="0"
        cellPadding={ 0 }
        cellSpacing={ 0 }>
      <tr>
        {
                    items.map((item, index) => {
                      const { link, label, id, medium } = item;

                      const itemAvailableIn = setMedium(medium);
                      const _id = id === '' ? createID(item) : id;

                      return (
                        <td key={ index } className={ classNames('htmplar-menu-container', itemAvailableIn) }>
                          <a href={ link } id={ _id }>{ label }</a>
                        </td>
                      );
                    })
                }
      </tr>
    </table>
  );
};

Menu.defaultProps = {
  align: 'center',
  medium: 'both',
  id: ''
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
