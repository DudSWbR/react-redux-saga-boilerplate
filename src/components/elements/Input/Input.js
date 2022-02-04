import React from "react";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import TextField from "@material-ui/core/TextField";
import { MdDone, MdCreditCard, MdWarning, MdCheckCircle } from "react-icons/md";
import { Message, Margin } from "~/components/elements";
import {
  BoxInput,
  Icon,
  Error,
  Success,
  Change,
  Label,
  Voucher,
  SearchPoint,
} from "./styles";

export default function Input({
  onChange,
  icon,
  type,
  errors,
  touched,
  label,
  htmlFor,
  name,
  value,
  placeholder,
  onBlur,
  mask,
  disabled,
  min,
  onFocus,
  guide,
  maxLength,
  clearField,
  clearCoupon,
  valid,
  textField,
  inputProps,
  autocomplete,
}) {
  function iconCondition() {
    if (icon === "SEARCH") {
      return <SearchPoint />;
    }
    if (icon === "CARD") {
      return <MdCreditCard />;
    }
    if (icon === "VOUCHER" && !!valid) {
      return (
        <Success>
          <MdCheckCircle />
        </Success>
      );
    }
    if (icon === "VOUCHER" && !!errors) {
      return (
        <Error>
          <MdWarning />
        </Error>
      );
    }
    if (icon === "VOUCHER") {
      return <Voucher src={iconVoucher} />;
    }
    if (icon === "CHECK" && touched && !errors) {
      return <MdDone />;
    }
    if (icon === "FORCECHECK" && valid) {
      return (
        <Success>
          <MdDone />
        </Success>
      );
    }
    if (icon === "FORCECHECK" && errors) {
      return (
        <Error>
          <MdWarning />
        </Error>
      );
    }
    return null;
  }

  function clearAllCoupon() {
    clearField(name, "");
    clearCoupon();
  }

  const conditionInput = () => {
    if (mask) {
      return (
        <>
          <Label htmlFor={htmlFor}>
            {label}{" "}
            {clearField && disabled && (
              <Change type="button" onClick={clearAllCoupon}>
                Alterar
              </Change>
            )}
          </Label>
          <div>
            <MaskedInput
              mask={mask}
              id={htmlFor}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              type={type}
              name={name}
              placeholder={placeholder}
              maxLength={maxLength}
              onFocus={onFocus}
              guide={guide}
              disabled={disabled}
            />
            {icon && <Icon>{iconCondition()}</Icon>}
          </div>
          {!!errors && (
            <Margin mt={1}>
              <Message variant="error">{errors}</Message>
            </Margin>
          )}
        </>
      );
    }
    if (textField) {
      return (
        <TextField
          label={placeholder}
          defaultValue={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          type={type}
          variant="outlined"
          InputProps={inputProps}
          fullWidth
          helperText={errors}
          error={!!errors}
        />
      );
    }

    return (
      <>
        <Label htmlFor={htmlFor}>
          {label}{" "}
          {clearField && disabled && (
            <Change type="button" onClick={clearAllCoupon}>
              Alterar
            </Change>
          )}
        </Label>
        <div>
          <input
            id={htmlFor}
            value={value}
            onChange={onChange}
            min={min}
            onBlur={onBlur}
            type={type}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            onFocus={onFocus}
            autoComplete={autocomplete}
          />
          {icon && <Icon>{iconCondition()}</Icon>}
        </div>
        {!!errors && (
          <Margin mt={1}>
            <Message variant="error">{errors}</Message>
          </Margin>
        )}
      </>
    );
  };

  return (
    <BoxInput
      valid={valid}
      touched={touched}
      errors={errors}
      disabled={disabled}
      textField={textField}
      icon={!!icon}
    >
      {conditionInput()}
    </BoxInput>
  );
}

Input.defaultProps = {
  type: "text",
  placeholder: "",
  icon: "",
  htmlFor: "",
  mask: "",
  errors: "",
  label: "",
  onBlur: () => {},
  onFocus: () => {},
  clearField: null,
  clearCoupon: () => {},
  min: 0,
  disabled: false,
  touched: undefined,
  guide: true,
  maxLength: "50",
  valid: false,
  textField: false,
  inputProps: {},
  autocomplete: "none",
};

Input.propTypes = {
  // coupon
  valid: PropTypes.bool,
  clearCoupon: PropTypes.func,
  clearField: PropTypes.func,
  // coupon
  htmlFor: PropTypes.string,
  maxLength: PropTypes.string,
  guide: PropTypes.bool,
  touched: PropTypes.bool,
  icon: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  errors: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  mask: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.instanceOf(RegExp)),
  ]),
  min: PropTypes.number,
  disabled: PropTypes.bool,
  textField: PropTypes.bool,
  inputProps: PropTypes.shape({}),
  autocomplete: PropTypes.string,
};
