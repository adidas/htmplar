// column

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Column = (props) => {
  const { children, valign, cellClasses, className } = props;

  return (
    <td valign={ valign }
        className={ classNames('htmplar-block-inner htmplar-cell', cellClasses, className) }>
      { children }
    </td>
  );
};

Column.defaultProps = {
  valign: 'top',
  cellClasses: '',
  className: ''
};

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.symbol,
    PropTypes.func,
    PropTypes.array,
    PropTypes.string
  ]).isRequired,
  cellClasses: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),
  valign: PropTypes.string
};

export default Column;
