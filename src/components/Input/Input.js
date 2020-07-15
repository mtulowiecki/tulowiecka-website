import styled from 'styled-components';
import { media } from 'utils';

const Input = styled.input`
  width: 95%;
  max-width: 280px;
  margin: 0 auto 16px;
  padding: 4px 16px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.regular};
  background-color: transparent;
  border: none;
  border-bottom: ${({ theme }) => theme.gray} solid 1px;
  resize: none;

  ::placeholder {
    text-transform: lowercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.gray};
  }

  &:focus {
    outline: none;
  }

  ${media.tablet`
  max-width: 450px;
  `}
`;

export default Input;
