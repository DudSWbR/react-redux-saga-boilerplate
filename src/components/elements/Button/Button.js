import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './styles';

export default function Button({
  disabled,
  type,
  size,
  color,
  children,
  variant,
  className,
  onClick,
  gtmAction,
  gtmValue,
  full,
}) {
  return (
    <ButtonStyle
      className={className}
      disabled={disabled}
      type={type}
      size={size}
      variant={variant}
      color={color}
      onClick={onClick}
      gtm-action={gtmAction}
      gtm-value={gtmValue}
      full={full}
    >
      {children}
    </ButtonStyle>
  );
}

Button.defaultProps = {
  type: 'button',
  color: 'primary',
  size: 'medium',
  variant: 'contained',
  disabled: false,
  className: '',
  onClick: () => {},
  gtmAction: '',
  gtmValue: '',
  full: false,
};

Button.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'grey',
    'white',
    'disabled',
    'default',
    'success',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  gtmAction: PropTypes.string,
  gtmValue: PropTypes.string,
  full: PropTypes.bool,
};
