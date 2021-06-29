import styled from 'styled-components';
import { TextareaAutosize } from '@material-ui/core';
import theme from '~/styles/theme';

export const Area = styled(TextareaAutosize)`
  border-radius: 5px;
  padding: 15px;
  width: 100%;
  border: 1px solid ${theme.palette.common.lightGrey};
  font-family: 'IBM Plex Sans', sans-serif;
`;
