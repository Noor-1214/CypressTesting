describe ('Assertions Suite',()=>{
    beforeEach(()=>{
    cy.visit('https://testautomationpractice.blogspot.com/')
    })
    // Asserting the Title of the Page
    it('Assertion Test',()=>{
    cy.title().should('equal', 'Automation Testing Practice');
    })

    // Asserting Text Content of an Element
    it('Assert Text Content', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('h1').should('contain', 'Automation Testing Practice');
    })

    // Asserting the URL of the Page
    it('Assert Page URL', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.url().should('equal', 'https://testautomationpractice.blogspot.com/');
    })

    // Asserting Text Content of an Element
    it('Assert Text Content', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('h1').should('contain', 'Automation Practice');
    })
    
})
