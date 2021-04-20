import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    height: 6.5rem;

    display: flex;
    align-items: center;

    padding: 2rem 4rem;

    border-bottom: 1px solid ${theme.colors.gray100};

    p {
      margin-left: 2rem;
      padding: 0.25rem 0 0.25rem 2rem;
      border-left: 1px solid ${theme.colors.gray100};
    }

    span {
      margin-left: auto;
      text-transform: capitalize;
    }
  `}
`;
