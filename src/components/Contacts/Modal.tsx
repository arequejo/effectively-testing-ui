import styled from 'styled-components';
import { XIcon } from '@heroicons/react/outline';

const Wrapper = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Content = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 20px;
  padding-top: 48px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background-color: #ffffff;
`;

const CloseButton = styled.button`
  padding: 5px;
  border-radius: 99px;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray);
  border: 1px solid var(--gray-light);
  background-color: var(--gray-light);
  transition: all 0.2s;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--gray-light);
    border-color: var(--gray);
    background-color: var(--gray);
  }
`;

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

function Modal({ isOpen, children, onClose }: ModalProps) {
  return (
    <Wrapper isOpen={isOpen} role="dialog">
      <Content>
        <CloseButton onClick={onClose} type="button" aria-label="close">
          <XIcon className="modal-close-icon" />
        </CloseButton>
        {children}
      </Content>
    </Wrapper>
  );
}

export default Modal;
