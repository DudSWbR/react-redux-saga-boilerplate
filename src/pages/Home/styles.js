import styled from 'styled-components';
import theme from '~/styles/theme';

export const Block = styled.div`
  @media (min-width: ${theme.breakpoints.values.lg}px) {
    margin-top: 48px;
  }
`;
