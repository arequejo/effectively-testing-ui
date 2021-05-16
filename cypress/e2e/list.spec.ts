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
      cy.get('.sc-bdnxRM.dOutf')
        .should('have.length', contacts.length)
        .each(($contact, index) => {
          const contact = contacts[index];

          cy.wrap($contact).as('contact');

          // Image
          cy.get('@contact')
            .find('.sc-dlnjwi.kOOA-DX')
            .should('have.attr', 'src', contact.photo);

          // Name
          cy.get('@contact')
            .find('.sc-eCApnc.eZjoFi')
            .should('have.text', contact.name);

          // Phone number
          cy.get('@contact')
            .find('.sc-jSFjdj.bqbRfE:first-of-type')
            .should('have.attr', 'href', `tel:${contact.phoneNumber}`)
            .should('contain', contact.phoneNumber);

          // Email
          cy.get('@contact')
            .find('.sc-jSFjdj.bqbRfE:last-of-type')
            .should('have.attr', 'href', `mailto:${contact.email}`)
            .should('contain', contact.email);
        });
    });
  });
});
