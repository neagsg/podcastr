import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 3rem 4rem;
    width: 26.5rem;
    height: 100vh;

    background: ${theme.colors.purple500};
    color: ${theme.colors.white};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    header {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    strong {
      font-family: Lexend, sans-serif;
      font-weight: 600;
    }

    footer {
      align-self: stretch;

      &.empty {
        opacity: 0.5;
      }
    }
  `}
`;

export const EmptyPlayer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 20rem;
    border: 1.5px dashed ${theme.colors.purple300};
    border-radius: 1.5rem;
    background: linear-gradient(
      143.8deg,
      rgba(145, 100, 250, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    );

    padding: 4rem;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Progress = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: ${theme.font.sizes.xsmall};

    span {
      display: inline-block;
      width: 4rem;
      text-align: center;
    }
  `}
`;
export const Slider = styled.div`
  flex: 1;
`;

export const EmptySlider = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 4px;
    background: ${theme.colors.purple300};
  `}
`;
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.5rem;

  button {
    background: transparent;
    border: 0;
    font-size: 0;
  }
`;
