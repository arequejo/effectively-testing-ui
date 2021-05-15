import * as React from 'react';
import Modal from './Modal';
import Alert from './Alert';
import { Control, Label, Input, Button, ButtonGroup } from './styled';
import { FormContact } from '../../support/types';
import { Status } from '../../support/enums';
import { saveContact } from '../../services/api';

type ContactFormProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
};

const initialContactData: FormContact = {
  photo: '',
  name: '',
  email: '',
  phoneNumber: '',
};

function ContactForm({ isOpen, onClose, onSave }: ContactFormProps) {
  const [contact, setContact] = React.useState<FormContact>(initialContactData);
  const [status, setStatus] = React.useState<Status>(Status.Idle);

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLInputElement;
    setContact({
      ...contact,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setStatus(Status.Pending);
    saveContact(contact)
      .then(() => {
        setContact(initialContactData);
        setStatus(Status.Resolved);
        onSave();
      })
      .catch(() => {
        setStatus(Status.Rejected);
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {status === Status.Rejected && (
        <Alert type="error" message="Uh oh! Looks like something went wrong" />
      )}

      <form onSubmit={handleSubmit}>
        <Control>
          <Label htmlFor="photo">Photo URL</Label>
          <Input
            id="photo"
            type="url"
            name="photo"
            value={contact.photo}
            onChange={handleChange}
          />
        </Control>

        <Control>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
          />
        </Control>

        <Control>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
          />
        </Control>

        <Control>
          <Label htmlFor="phoneNumber">Phone number</Label>
          <Input
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            value={contact.phoneNumber}
            onChange={handleChange}
          />
        </Control>

        <Control>
          <ButtonGroup>
            <Button variant="secondary" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              disabled={status === Status.Pending}
            >
              Save
            </Button>
          </ButtonGroup>
        </Control>
      </form>
    </Modal>
  );
}

export default ContactForm;
