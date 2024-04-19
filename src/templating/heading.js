// headline

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { setMedium, createID } from './utils';

const Heading = props => {
  const { className, children, medium, id } = props;

  const availableIn = setMedium(medium);
  const _id = id === '' ? createID(props) : id;

  return (
    <h2 id={_id} className={classNames('htmplar-heading', className, availableIn)}>
      {children}
    </h2>
  );
};

Heading.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  id: PropTypes.string,
  medium: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.symbol, PropTypes.array, PropTypes.string])
};

export default Heading;
