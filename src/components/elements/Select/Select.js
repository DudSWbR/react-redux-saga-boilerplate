import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Message, Margin } from '~/components/elements';
import { BoxInput, SelectInput } from './styles';
import theme from '~/styles/theme';

export default function Select({
  onChange,
  errors,
  label,
  htmlFor,
  name,
  value,
  onBlur,
  options,
  placeholder,
  disabled,
}) {
  useEffect(() => {
    if (value && value.length > 0) {
      onChange(name, { value, label: value });
    }
  }, [name, onChange, value]);
  return (
    <BoxInput>
      <label htmlFor={htmlFor}>{label}</label>

      <SelectInput
        isDisabled={disabled}
        components={{
          IndicatorSeparator: () => null,
        }}
        onChange={val => onChange(name, val)}
        onBlur={onBlur}
        noOptionsMessage={() => '...'}
        value={value}
        placeholder={placeholder}
        options={options}
        theme={items => ({
          ...items,
          borderRadius: '5px',
          spacing: {
            controlHeight: 47,
            menuGutter: 5,
            baseUnit: 5,
          },
          colors: {
            ...items.colors,
            text: theme.palette.common.dark,
            primary25: theme.palette.common.light,
            primary: theme.palette.primary.main,
          },
        })}
      />

      {!!errors && (
        <Margin mt={1}>
          <Message variant="error">{errors}</Message>
        </Margin>
      )}
    </BoxInput>
  );
}

Select.defaultProps = {
  disabled: false,
  htmlFor: '',
  onBlur: () => {},
  errors: '',
  label: '',
  value: {
    value: 0,
    label: '',
  },
};

Select.propTypes = {
  htmlFor: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  errors: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      label: PropTypes.string,
    }),
    PropTypes.string,
  ]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      label: PropTypes.string,
    })
  ).isRequired,
};
