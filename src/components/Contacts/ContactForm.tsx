import * as React from 'react';
import Modal from './Modal';
// import Alert from './Alert';
// import { Control, Label, Input, Button, ButtonGroup } from './styled';
import { FormContact } from '../../support/types';
// import { Status } from '../../support/enums';
// import { saveContact } from '../../services/api';

type ContactFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

const initialContactData: FormContact = {
  photo: '',
  name: '',
  email: '',
  phoneNumber: '',
};

function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [contact, setContact] = React.useState<FormContact>(initialContactData);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      TODO
    </Modal>
  );
}

export default ContactForm;
