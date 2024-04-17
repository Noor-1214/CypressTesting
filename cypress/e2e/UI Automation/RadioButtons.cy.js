describe ('Radio Buttons and Check Boxes',()=>{

    it('Checking Radio Buttons',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
       
        // visibility of Radio Buttons
        cy.get("#male").should('be.visible')
        cy.get("#female").should('be.visible')

        // Selecting Radio Buttons
        cy.get("#male").check().should('be.checked')
        cy.get("#female").should('not.be.checked')

        cy.get("#female").check().should('be.checked')
        cy.get("#male").should('not.be.checked')

    })


    it('Checking Check Boxes',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
       
        // visibility of element
        cy.get("label[for='monday']").should('be.visible')

        // // Selecting Single Check Box
        // cy.get("#monday").check().should('be.checked')

        // // Unselecting Checkbox
        // cy.get("#monday").uncheck().should('not.be.checked')

        // Selecting all Check Boxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
    })
})