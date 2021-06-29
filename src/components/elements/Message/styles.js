import styled, { css } from 'styled-components';
import { SnackbarContent } from '@material-ui/core';
import theme from '~/styles/theme';

export const Snack = styled(SnackbarContent)`
font-size: 0.8em;
margin-top:0;
min-width: auto;
box-shadow: none;
padding:0;

  #client-snackbar{
    display: flex;
      align-items: center;
      width: 100%;
  }
  /* SUCESSS */
  ${props =>
    props.variant === 'success' &&
    css`
      color: ${theme.palette.common.success};
      background: transparent;
    `}

    /* ERROR */
  ${props =>
    props.variant === 'error' &&
    css`
      color: ${theme.palette.error.main};
      background: transparent;
    `}

    svg{
      margin-right: 5px;
    }

    /* INFO */
  ${props =>
    props.variant === 'info' &&
    css`
      color: ${theme.palette.primary.main};
      background: transparent;
    `}

    svg{
      margin-right: 5px;
    }
`;
