describe('Test Automation Practice Blog Tests', () => {
    before(() => {
      // Visit the website
      cy.visit('https://testautomationpractice.blogspot.com/');
    });
  
    it('Should verify the title of the page', () => {
        // cy.wait(5000);

      // Test to verify the title of the page
      cy.title().should('contain', 'Automation Testing Practice');
    });
  
    it('Should verify the presence of a specific element', () => {
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.wait(2000);

      // Test to verify the presence of a specific element on the page
      cy.get("button[onclick='myFunction()']");
    });
  });
  