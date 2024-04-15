describe('template spec', () => {
    it('Test1', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('https://www.youtube.com/@testerstalk');
      cy.get('#channel-header').click();
      cy.get('#c4-player > .ytp-chrome-bottom > .ytp-chrome-controls > .ytp-left-controls > .ytp-play-button').click();
      cy.get('#search-input > #search').clear('t');
      cy.get('#search-input > #search').type('testers talk{enter}');
      /* ==== End Cypress Studio ==== */
    })
  })