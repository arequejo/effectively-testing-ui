import Modal from './Modal';
// import { Control, Label, Input, Button, ButtonGroup } from './styled';

type ContactFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

function ContactForm({ isOpen, onClose }: ContactFormProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      TODO
    </Modal>
  );
}

export default ContactForm;
