describe ('Selector Suite',()=>{
    beforeEach(()=>{
    cy.visit('https://practice.expandtesting.com/')
    
    // Asserting the Title of the Page
    it('Selector Test',()=>{
    cy.get().should('equal', 'Automation Testing Practice');
    })
})
})