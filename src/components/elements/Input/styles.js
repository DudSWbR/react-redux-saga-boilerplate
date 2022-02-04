import styled, { css } from 'styled-components';
import ReactSVG from 'react-svg';
import { MdSearch } from 'react-icons/md';
import theme from '~/styles/theme';

export const BoxInput = styled.div`
  position: relative;
  &.input-none {
    display: none;
  }
  > div {
    position: relative;
    margin-top: 2px;
  }
  input {
    border: 1px solid ${theme.palette.common.lightGrey};
    padding: 15px;
    display: block;
    height: 48px;
    border-radius: 5px;
    width: 100%;
    font-size: 0.8em;
    color: ${theme.palette.common.dark};
    ${props =>
      props.disabled &&
      css`
        background-color: hsl(0, 0%, 95%);
      `}
    ${props =>
      props.icon &&
      css`
        padding-right: 40px;
      `}
  }
  label {
    margin-bottom: 10px;
    color: ${theme.palette.common.dark};
  }
  ${props =>
    props.errors &&
    css`
      input {
        border: 1px solid ${theme.palette.error.main};
      }
    `}
  ${props =>
    !props.errors &&
    props.touched &&
    css`
      input {
        border: 1px solid ${theme.palette.common.success};
      }
      svg {
        color: ${theme.palette.common.success};
      }
    `}
  ${props =>
    props.valid &&
    css`
      input {
        border: 1px solid ${theme.palette.common.success};
      }
      svg {
        color: ${theme.palette.common.success};
      }
    `}

  ${props =>
    props.textField &&
    css`
      input {
        height: 48px;
        border: none;
        padding-top: 0;
        padding-bottom: 0;
      }
    `}

    .MuiFormHelperText-contained {
      margin-top: 4px;
      margin-bottom: 4px;
    }
`;

export const Icon = styled.span`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 10px;
  color: ${theme.palette.primary.main};
  font-size: 25px;
`;
export const Error = styled.span`
  color: ${theme.palette.error.main};
`;
export const Success = styled.span`
  color: ${theme.palette.common.success};
`;

export const Change = styled.button`
  color: ${theme.palette.primary.main};
  text-decoration: underline;
  font-size: 0.9em;
`;
export const Label = styled.label`
  display: flex;
  justify-content: space-between;
`;
export const Voucher = styled(ReactSVG)`
  cursor: pointer;
`;
export const SearchPoint = styled(MdSearch)`
  cursor: pointer;
`;
