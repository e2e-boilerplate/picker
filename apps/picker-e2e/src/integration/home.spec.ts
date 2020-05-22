describe('Home', () => {
  before(() => {
    cy.visit('/');
  });

  it('start', () => {
    cy.get('button').click();
  });

  it('platform', () => {
    cy.url().then((url) => {
      expect(url).to.eq('http://localhost:4200/platforms');
    });
  });
});
