import React from 'react';

import PropTypes from 'prop-types';
import { Snack } from './styles';

export default function Message({ children, variant }) {
  return (
    <Snack
      variant={variant}
      aria-describedby="client-snackbar"
      message={<span id="client-snackbar">{children}</span>}
    />
  );
}

Message.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  variant: PropTypes.oneOf(['success', 'error', 'info']).isRequired,
};
