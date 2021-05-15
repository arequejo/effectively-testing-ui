/* eslint-disable @typescript-eslint/no-unused-vars */
// Testing library
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// MSW
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import ContactForm from '../ContactForm';
import { FormContact } from '../../../support/types';

// Component props
const props = {
  isOpen: true,
  onClose: jest.fn(),
  onSave: jest.fn(),
};

// Dummy contact data
const contact: FormContact = {
  photo: 'https://loremflickr.com/100/100?random=3',
  name: 'Foo Bar',
  email: 'foo.bar@example.com',
  phoneNumber: '6561221123',
};

// MSW setup
const baseUrl = 'http://localhost:3001';
const contactsEndpoint = `${baseUrl}/contacts`;

const server = setupServer(
  rest.post(contactsEndpoint, (req, res, ctx) => {
    return res(ctx.status(201));
  })
);

// Jest global methods
beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
  props.onClose.mockReset();
  props.onSave.mockReset();
});
afterAll(() => {
  server.close();
});

describe('ContactForm component', () => {
  it('submits the form successfully', async () => {
    // Render the component
    render(<ContactForm {...props} />);

    // Fill out fields
    const photoField = screen.getByLabelText(/photo/i);
    expect(photoField).toBeInTheDocument();
    userEvent.type(photoField, contact.photo);
    expect(photoField).toHaveValue(contact.photo);

    const nameField = screen.getByLabelText(/name/i);
    expect(nameField).toBeInTheDocument();
    userEvent.type(nameField, contact.name);
    expect(nameField).toHaveValue(contact.name);

    const emailField = screen.getByLabelText(/email/i);
    expect(emailField).toBeInTheDocument();
    userEvent.type(emailField, contact.email);
    expect(emailField).toHaveValue(contact.email);

    const phoneNumberField = screen.getByLabelText(/phone number/i);
    expect(phoneNumberField).toBeInTheDocument();
    userEvent.type(phoneNumberField, contact.phoneNumber);
    expect(phoneNumberField).toHaveValue(contact.phoneNumber);

    // Submit the form
    const submitButton = screen.getByRole('button', { name: /save/i });
    userEvent.click(submitButton);
    expect(submitButton).toBeDisabled();

    // Validate fields have been reset
    await waitFor(() => expect(photoField).not.toHaveValue());
    expect(nameField).not.toHaveValue();
    expect(emailField).not.toHaveValue();
    expect(phoneNumberField).not.toHaveValue();
    expect(submitButton).toBeEnabled();
    expect(props.onSave).toHaveBeenCalled();
  });

  it('handles server errors when submitting the form', async () => {
    // Update the default handler so it returns a 500
    server.use(
      rest.post(contactsEndpoint, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    // Render the component
    render(<ContactForm {...props} />);

    // Submit the form
    const submitButton = screen.getByRole('button', { name: /save/i });
    userEvent.click(submitButton);
    expect(submitButton).toBeDisabled();

    // Validate alert
    const alert = await screen.findByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent(/something went wrong/i);
    expect(submitButton).toBeEnabled();
  });
});
