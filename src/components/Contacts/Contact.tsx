import styled from 'styled-components';
import { PhoneIcon, MailIcon } from '@heroicons/react/outline';
import { Contact as ContactType } from '../../support/types';

const ContactListItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

const PhotoWrapper = styled.div`
  margin-right: 20px;
`;

const Photo = styled.img`
  width: 75px;
  height: 75px;
  display: block;
  border-radius: 50%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const Info = styled.div`
  flex: 1 1 auto;
`;

const Name = styled.h2`
  font-size: 20px;
`;

const ContactItem = styled.a`
  margin-top: 5px;
  display: flex;
  align-items: center;
  color: var(--gray);
  font-size: 14px;
  text-decoration: none;
  transition: color 0.2s;

  &:hover,
  &:active,
  &:visited {
    color: var(--gray-dark);
  }
`;

type ContactProps = {
  contact: ContactType;
};

function Contact({ contact }: ContactProps) {
  return (
    <ContactListItem>
      <PhotoWrapper>
        <Photo src={contact.photo} alt="Contact" />
      </PhotoWrapper>
      <Info>
        <Name>{contact.name}</Name>
        <ContactItem href={`tel:${contact.phoneNumber}`}>
          <PhoneIcon className="contact-icon" />
          {contact.phoneNumber}
        </ContactItem>
        <ContactItem href={`mailto:${contact.email}`}>
          <MailIcon className="contact-icon" />
          {contact.email}
        </ContactItem>
      </Info>
    </ContactListItem>
  );
}

export default Contact;
