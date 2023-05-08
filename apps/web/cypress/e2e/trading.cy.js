/// <reference types="cypress" />

describe('trading', () => {
  let myOrderID;

  beforeEach(() => {
    cy.visit('/');
    cy.contains('login').click();

    cy.origin(Cypress.env('AUTH0_ISSUER_BASE_URL'), {}, () => {
      cy.get('#username').type('cypress-tester');
      cy.get('#password').type('UNa3~#7E@x5m3FNCq7Sy');
      cy.contains('button[value=default]', 'Continue').click();
    });
  });

  it('buy BTC with market order', () => {
    cy.visit(`${Cypress.config('baseUrl')}/trade/BTC_USDT`);
    cy.get('#buy-amount').type(1);

    cy.intercept('POST', '**/trade/market/buy').as('postOrder');
    cy.get('#buy-btn').click();
    cy.wait('@postOrder').then(({ response }) => {
      cy.wrap(response.statusCode).should('eq', 200);
      cy.wrap(response.body).should('have.a.property', 'orderID');
      myOrderID = response.body.orderID;
    });
  });

  // TODO: Check whether the same order can be retrieved from View Orders Page
  it('', () => {});
});
