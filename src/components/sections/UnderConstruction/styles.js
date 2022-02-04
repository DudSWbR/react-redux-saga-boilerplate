import styled from "styled-components";
import theme from "~/styles/theme";

export const ConstructionHolder = styled.div`
    text-align: center;
    width: 100%;
    padding: 16px;
    margin: 0 auto;
    @media (min-width: ${theme.breakpoints.values.lg}px) {
        max-width: 1200px;
    }
`;