import * as React from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import ContactForm from './ContactForm';
import { Title, Divider, Button } from './styled';
import { Contact as ContactType } from '../../support/types';
import { Status } from '../../support/enums';
import { getContacts } from '../../services/api';

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContactsList = styled.ul`
  list-style-type: none;
`;

function Contacts() {
  const [contacts, setContacts] = React.useState<ContactType[]>([]);
  const [status, setStatus] = React.useState<Status>(Status.Idle);
  const [isFormOpen, setIsFormOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    fetchContacts();
  }, []);

  function fetchContacts() {
    setStatus(Status.Pending);
    getContacts()
      .then((contacts) => {
        setContacts(contacts);
        setStatus(Status.Resolved);
      })
      .catch(() => {
        setStatus(Status.Rejected);
      });
  }

  return (
    <>
      <Toolbar>
        <Title>Contacts</Title>
        <Button variant="primary" onClick={() => setIsFormOpen(true)}>
          Add
        </Button>
      </Toolbar>

      <Divider />

      {status === Status.Idle || status === Status.Pending ? (
        <p>Loading contacts...</p>
      ) : status === Status.Rejected ? (
        <p>Uh oh! There was an error loading the contacts.</p>
      ) : (
        <ContactsList>
          {contacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ContactsList>
      )}

      <ContactForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={() => {
          fetchContacts();
          setIsFormOpen(false);
        }}
      />
    </>
  );
}

export default Contacts;
