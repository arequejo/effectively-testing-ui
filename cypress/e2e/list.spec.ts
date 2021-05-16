import { Contact } from '../../src/support/types';

describe('Contacts', () => {
  it('displays the list of contacts', () => {
    cy.intercept('GET', 'http://localhost:3001/contacts', (req) => {
      delete req.headers['if-none-match'];
    }).as('getContacts');

    cy.visit('/');

    cy.wait('@getContacts').then(({ response }) => {
      const contacts = response.body as Contact[];

      // Contacts
      cy.findAllByRole('listitem')
        .should('have.length', contacts.length)
        .each(($contact, index) => {
          const contact = contacts[index];

          cy.wrap($contact).within(() => {
            // Image
            cy.findByRole('img', { name: /contact/i }).should(
              'have.attr',
              'src',
              contact.photo
            );

            // Name
            cy.findByRole('heading', { name: contact.name }).should('exist');

            // Phone number
            cy.findByRole('link', { name: contact.phoneNumber }).should(
              'have.attr',
              'href',
              `tel:${contact.phoneNumber}`
            );

            // Email
            cy.findByRole('link', { name: contact.email }).should(
              'have.attr',
              'href',
              `mailto:${contact.email}`
            );
          });
        });
    });
  });
});
