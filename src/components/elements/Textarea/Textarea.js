import React from 'react';
import PropTypes from 'prop-types';
import { Area } from './styles';

export default function Textarea({ value, name, onChange, placeholder, rows }) {
  return (
    <Area
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
    />
  );
}

Textarea.defaultProps = {
  placeholder: '',
  value: '',
  rows: 5,
};

Textarea.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.number,
};
