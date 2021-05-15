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
});
afterAll(() => {
  server.close();
});

describe('ContactForm component', () => {
  it('submits the form successfully', async () => {
    // Render the component
    render(<ContactForm {...props} />);

    // Fill out fields

    // Submit the form

    // Validate fields have been reset
  });

  it('handles server errors when submitting the form', async () => {
    // Update the default handler so it returns a 500

    // Render the component
    render(<ContactForm {...props} />);

    // Submit the form

    // Validate alert
  });
});
