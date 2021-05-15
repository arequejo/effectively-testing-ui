import styled, { css } from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
`;

export const Divider = styled.hr`
  margin: 20px 0;
  border: none;
  border-top: 1px solid var(--gray-light);
`;

type ButtonProps = {
  variant: 'primary' | 'secondary';
};

export const Button = styled.button<ButtonProps>`
  padding: 8px 12px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  transition: all 0.2s;
  cursor: pointer;

  &:hover:disabled {
    cursor: not-allowed;
  }

  ${(props) =>
    props.variant === 'primary' &&
    css`
      color: #ffffff;
      border-color: var(--gray);
      background-color: var(--gray);

      &:focus,
      &:hover:not(:disabled) {
        border-color: var(--gray-dark);
        background-color: var(--gray-dark);
      }
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      color: var(--gray);
      border-color: #ffffff;
      background-color: #ffffff;

      &:focus,
      &:hover:not(:disabled) {
        border-color: var(--gray-light);
        background-color: var(--gray-light);
      }
    `}
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;

  ${Button} {
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
`;

export const Control = styled.div`
  &:not(:first-of-type) {
    margin-top: 20px;
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  display: block;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  display: block;
  color: var(--gray);
  border-radius: 5px;
  border: 1px solid var(--gray-light);
  background-color: var(--gray-light);
  transition: all 0.2s;

  &:focus {
    background-color: #ffffff;
    border-color: var(--gray);
  }
`;
