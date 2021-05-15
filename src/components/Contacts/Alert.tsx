import styled, { css } from 'styled-components';

type AlertType = 'success' | 'error';

type ContainerProps = {
  type: AlertType;
};

type AlertProps = {
  type: AlertType;
  message: string;
};

const Message = styled.p<ContainerProps>`
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 5px;
  font-size: 14px;
  line-height: 1.25;

  ${(props) =>
    props.type === 'success' &&
    css`
      color: #38a169;
      background-color: #f0fff4;
    `}

  ${(props) =>
    props.type === 'error' &&
    css`
      color: #e53e3e;
      background-color: #fff5f5;
    `}
`;

function Alert({ type, message }: AlertProps) {
  return (
    <Message type={type} role="alert">
      {message}
    </Message>
  );
}

export default Alert;
