import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';
import theme from '~/styles/theme';

export const ButtonStyle = styled(Button)`
  border-radius: 25px;
  cursor: pointer;
  transition:all 0.2s ease-in-out;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: ${theme.palette.common.white};
  text-transform: none;
  span{
  font-weight:normal;
  text-decoration: none;
  }
  &:hover{
    transition:all 0.3s ease-in-out;
  }

  transition: max-width 0.2s ease, min-width 0.2s ease;
  ${props =>
    props.size === 'small' &&
    css`
      font-size: 0.9em;
    `}
  ${props =>
    props.size === 'large' &&
    css`
      font-size: 1.1em;
    `}
  ${props =>
    props.size === 'full' &&
    css`
      font-size: 1.1em;
      width: 100%;
    `}
  ${props =>
    props.full &&
    css`
      width: 100%;
    `}
  ${props =>
    props.color === 'primary' &&
    css`
      background: ${props.variant === 'outlined'
        ? theme.palette.common.transparent
        : theme.palette.primary.main};
      color: ${props.variant === 'outlined'
        ? theme.palette.primary.main
        : theme.palette.common.white};
      border: ${props.variant === 'outlined' &&
        `1px solid ${theme.palette.primary.main}`};
      &:hover {
        background: ${theme.palette.primary.dark};
        color: ${props.variant === 'outlined' && theme.palette.common.white};
        border-color: transparent;
      }
    `}

  ${props =>
    props.color === 'secondary' &&
    css`
      background: ${props.variant === 'outlined'
        ? theme.palette.common.transparent
        : theme.palette.secondary.main};
      color: ${props.variant === 'outlined'
        ? theme.palette.secondary.main
        : theme.palette.common.white};
      border: ${props.variant === 'outlined' &&
        `1px solid ${theme.palette.secondary.main}`};
      &:hover {
        background: ${theme.palette.secondary.dark};
        color: ${props.variant === 'outlined' && theme.palette.common.white};
        border-color: transparent;
      }
    `}
  ${props =>
    props.color === 'grey' &&
    css`
      background: ${props.variant === 'outlined'
        ? theme.palette.common.transparent
        : theme.palette.common.grey};
      color: ${props.variant === 'outlined'
        ? theme.palette.common.grey
        : theme.palette.common.white};
      border: ${props.variant === 'outlined' &&
        `1px solid ${theme.palette.common.grey}`};
      &:hover {
        background: ${theme.palette.common.grey.hover};
        color: ${props.variant === 'outlined' && theme.palette.common.white};
        border-color: transparent;
      }
    `}
  ${props =>
    props.color === 'disabled' &&
    css`
      background: ${props.variant === 'outlined'
        ? theme.palette.common.transparent
        : theme.palette.common.disabled};
      color: ${props.variant === 'outlined' && theme.palette.common.disabled};
    `}
  ${props =>
    props.color === 'success' &&
    css`
      background: ${props.variant === 'outlined'
        ? theme.palette.common.transparent
        : theme.palette.common.success};
      color: ${props.variant === 'outlined' && theme.palette.common.success};
      border: 1px solid
        ${props.variant === 'outlined'
          ? theme.palette.common.success
          : theme.palette.common.transparent} !important;
    `}
  ${props =>
    props.color === 'white' &&
    css`
      background: ${props.variant === 'outlined'
        ? theme.palette.common.transparent
        : theme.palette.common.white};
      color: ${props.variant === 'outlined'
        ? theme.palette.common.white
        : theme.palette.primary.main};
      border: 1px solid
        ${props.variant === 'outlined'
          ? theme.palette.common.white
          : theme.palette.common.transparent} !important;
    `}


    &.button-chat{
      height: 48px;
    }


  &.animation-size{
    transition: max-width 0.6s cubic-bezier(0.03, 0.04, 0, 0.99), min-width 0.6s cubic-bezier(0.03, 0.04, 0, 0.99);
    min-width: 100px !important;


      .MuiCircularProgress-root {
        margin: 0 !important;
    width: 24px !important;
    height: 24px !important;
      }
  }

`;
