// content-block

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Content = (props) => {
  const { name, children } = props;

  return (
    <Fragment>
      { `<!-- ${ name } block starts here! -->` }
      { children }
      { `<!-- ${ name } block ends here! -->` }
    </Fragment>
  );
};

Content.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.symbol,
    PropTypes.array,
    PropTypes.string
  ]).isRequired
};

export default Content;
