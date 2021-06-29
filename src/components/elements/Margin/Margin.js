import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

export default function Margin({ children, ...rest }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Box {...rest}>{children}</Box>;
}

Margin.propTypes = {
  children: PropTypes.node.isRequired,
};
