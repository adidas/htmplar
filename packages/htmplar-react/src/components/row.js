// row

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Column from './column';

const Row = (props) => {
  const { columns, children, className, valign, cellClasses } = props;
  let cells = columns || children;

  cells = Array.isArray(cells) ? cells : [ cells ];

  return (
    <tr className={ classNames('htmplar-row', className) }>
      { cells.map((cell, index) => {
        const _className =
                    cell.props && cell.props.className
                      ? `${ cell.props.className }-parent` : '';
        const key = `${ _className }-${ index }`;

        return (
          <Column key={ key } valign={ valign } className={ _className } cellClasses={ cellClasses }>
            { cell }
          </Column>
        );
      }) }
    </tr>
  );
};

Row.defaultProps = {
  valign: 'top',
  cellClasses: ''
};

Row.propTypes = {
  columns: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.symbol,
    PropTypes.array,
    PropTypes.string
  ]),
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.symbol,
    PropTypes.array,
    PropTypes.string
  ]),
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
  valign: PropTypes.string
};

export default Row;
