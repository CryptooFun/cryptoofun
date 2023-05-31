/// <reference types="cypress" />

describe('find-join-lobby', () => {
  let lobbyTitle;

  beforeEach(() => {
    cy.visit('/');
    cy.contains('Log In').click();

    cy.origin(Cypress.env('AUTH0_ISSUER_BASE_URL'), {}, () => {
      cy.get('#username').type('cypress-tester');
      cy.get('#password').type('UNa3~#7E@x5m3FNCq7Sy');
      cy.get('form').submit();
    });
  });

  it('visit Lobbies Page and Try to join a lobby', () => {
    cy.visit(`${Cypress.config('baseUrl')}/lobbies`);

    cy.get(
      'div.shadow-default:nth-child(1) > div:nth-child(1) > h1:nth-child(1)'
    )
      .invoke('text')
      .then(val => {
        lobbyTitle = val;
        cy.get(
          'div.shadow-default:nth-child(1) > div:nth-child(2) > button:nth-child(7)'
        ).click();
      });

    cy.wait(1000 * 5);
  });

  it('check whether joined the lobby successfully', () => {
    cy.visit(`${Cypress.config('baseUrl')}/lobbies`);

    cy.get('button.flex-auto:nth-child(3)').click();

    cy.get('.py-8 > h1:nth-child(1)').should('have.text', lobbyTitle);
  });
});
