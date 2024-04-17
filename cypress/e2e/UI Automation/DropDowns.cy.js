describe ('Handle Dropdowns',()=>{

    it('Dropdown with Select',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#country').select('United Kingdom').should('have.value','uk')
    })

    it.only('Dropdown without Select',()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Pakistan')
        cy.get('#select2-billing_country-container').should('have.text','Pakistan')

    })


})
