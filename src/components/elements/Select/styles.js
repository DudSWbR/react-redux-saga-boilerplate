import styled from 'styled-components';
import Select from 'react-select';
import theme from '~/styles/theme';

export const BoxInput = styled.div`
  label {
    margin-bottom: 15px;
    display: block;
  }
  > div {
    margin-top: 2px;
  }
`;

export const SelectInput = styled(Select)`
  svg {
    color: ${theme.palette.primary.main};
  }
`;
