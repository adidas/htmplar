// hide in mso

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const HideMSO = props => {
  const { children } = props;

  return (
    <Fragment>
      {'<!--[if !mso]><!-- -->'}
      <div className="htmplar-hide-in-mso">{children}</div>
      {'<!--<![endif]-->'}
    </Fragment>
  );
};

HideMSO.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.symbol, PropTypes.array, PropTypes.string])
    .isRequired
};

export default HideMSO;
