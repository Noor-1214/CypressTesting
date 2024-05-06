describe ('Handling Frames',()=>{

    it('IFrames 1',()=>{
        cy.visit('https://practice.expandtesting.com/iframe')
        const iFrame = cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iFrame.clear().type("This is an IFrame practice session");
    })
})