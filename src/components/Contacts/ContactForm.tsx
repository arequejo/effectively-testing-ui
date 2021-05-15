import Modal from './Modal';
import { Control, Label, Input, Button, ButtonGroup } from './styled';

type ContactFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

function ContactForm({ isOpen, onClose }: ContactFormProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Control>
        <Label>Photo</Label>
        <Input />
      </Control>

      <Control>
        <Label>Name</Label>
        <Input />
      </Control>

      <Control>
        <Label>Email</Label>
        <Input />
      </Control>

      <Control>
        <Label>Phone number</Label>
        <Input />
      </Control>

      <Control>
        <ButtonGroup>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Save</Button>
        </ButtonGroup>
      </Control>
    </Modal>
  );
}

export default ContactForm;
