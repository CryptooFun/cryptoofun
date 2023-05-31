/// <reference types="cypress" />

const buyAmount = 0.01;

describe('trading-buy', () => {
  let balance;
  let cost;

  beforeEach(() => {
    cy.visit('/');
    cy.contains('Log In').click();

    cy.origin(Cypress.env('AUTH0_ISSUER_BASE_URL'), {}, () => {
      cy.get('#username').type('cypress-tester');
      cy.get('#password').type('UNa3~#7E@x5m3FNCq7Sy');
      cy.get('form').submit();
    });
  });

  it('Read wallet balance and remember', () => {
    cy.visit(`${Cypress.config('baseUrl')}/assets`);

    cy.get('#balance')
      .invoke('text')
      .then(val => {
        balance = Number(val.match(/\d|\.|\-/g).join(''));
      });
  });

  it('buy BTC with market order', () => {
    cy.visit(`${Cypress.config('baseUrl')}/trade/BTC_USDT`);
    cy.get('#buy-amount').clear().type(buyAmount);

    cy.intercept('POST', '**/trade/market/buy').as('postOrder');
    cy.get('#buy-btn').click();
    cy.wait('@postOrder').then(({ response }) => {
      cy.wrap(response.statusCode).should('eq', 200);
      cy.wrap(response.body).should('have.a.property', 'id');
    });
  });

  it('visit “View Orders Page”', () => {
    cy.visit(`${Cypress.config('baseUrl')}/orders/history`);

    cy.get('table')
      .find('tr')
      .eq(1)
      .find('td')
      .eq(3)
      .should('satisfy', $el => {
        return $el.text().includes(buyAmount.toString());
      });

    let actualizationPrice;
    cy.get('table')
      .find('tr')
      .eq(1)
      .find('td')
      .eq(4)
      .invoke('text')
      .then(val => {
        actualizationPrice = Number(val.match(/\d|\.|\-/g).join(''));
        cost = actualizationPrice * buyAmount;

        cy.wait(1000 * 10);
      });
  });

  it("Visit 'Wallet Page' and compare with the expected value", () => {
    cy.visit(`${Cypress.config('baseUrl')}/assets`);

    let newBalance;
    cy.get('#balance')
      .invoke('text')
      .then(val => {
        newBalance = Number(val.match(/\d|\.|\-/g).join(''));

        expect(newBalance.toFixed(2)).to.eql((balance - cost).toFixed(2));
      });
  });
});
