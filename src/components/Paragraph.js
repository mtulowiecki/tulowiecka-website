import styled, { css } from 'styled-components';
import { media } from 'src/utils';

const Paragraph = styled.p`
  display: block;
  text-decoration: none;
  margin: 1rem 0;
  text-decoration: none;
  color: inherit;
  font-size: ${({ theme }) => theme.fontSize.s};

  ${media.laptop`
    font-size: ${({ theme }) => theme.fontSize.m};
  `}

  ${({ decor, theme }) =>
    decor &&
    css`
      width: max-content;
      border-bottom: solid ${theme.tertiary} 1px;
    `};

  ${({ url }) =>
    url &&
    css`
      margin: 0.5rem 0 1rem;
      padding-left: 1.75rem;
      background: url(${url}) no-repeat;
      background-position: 0 50%;
      background-size: auto 1rem;

      ${media.laptop`
        padding-left: 2.5rem;
        background-size: auto 1.75rem;
      `}
    `}
`;

export default Paragraph;
