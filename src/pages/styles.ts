import styled, { css } from 'styled-components';

export const Homepage = styled.div`
  padding: 0 4rem;
  height: calc(100vh - 6rem);
  overflow-y: scroll;

  h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
`;
export const LatestEpisodes = styled.section`
  ul {
    list-style: none;
    display: grid;
    gap: 1.5rem;

    ${({ theme }) => css`
      li {
        background: ${theme.colors.white};
        border: 1px solid ${theme.colors.gray100};
        padding: 1.25rem;
        border-radius: 1.5rem;
        position: relative;

        display: flex;
        align-items: center;
        img {
          width: 6rem;
          height: 6rem;
          border-radius: 1rem;
        }


        button {
          position: absolute;
          right: 2rem;
          bottom: 2rem;

          width: 2.5rem;
          height: 2.5rem;
          background: ${theme.colors.white};
          border: 1px solid ${theme.colors.gray100};
          border-radius: 0.675rem;
          font-size: 0;
      }
    `}
  }

  @media (man-width: 1400px) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
export const AllEpisodes = styled.section``;
export const EpisodeDetails = styled.div`
  flex: 1;
  margin-left: 1rem;

  ${({ theme }) => css`
    a {
      display: block;
      color: ${theme.colors.gray800};
      font-family: Lexend, sans-serif;
      font-weight: 600;
      text-decoration: none;
      line-height: 1.4rem;

      &:hover {
        text-decoration: underline;
      }
    }
    p {
      font-size: ${theme.font.sizes.xsmall};
      margin-top: 0.5rem;
      max-width: 70%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    span {
      display: inline-block;
      margin-top: 0.5rem;
      font-size: 0.875rem;

      &:last-child {
        margin-left: 0.5rem;
        padding-left: 0.5rem;
        position: relative;

        &::before {
          content: '';
          width: 4px;
          height: 4px;
          border-radius: 2px;
          background: #ddd;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  `}
`;
