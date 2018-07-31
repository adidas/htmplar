// content-block

// eslint-disable-next-line
import React from 'react';
import PropTypes from 'prop-types';

const Content = (props) => {
  const { name, children } = props;

  return (
    <>
      { `<!-- ${ name } block starts here! -->` }
      { children }
      { `<!-- ${ name } block ends here! -->` }
    </>
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
