/// <reference types="cypress" />

describe('Components Check', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Contains Footer', () => {
    cy.contains('Built with ♥ By Remix')
  });
});
