describe('XPath Locators',()=>{

    it('Find Products',()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.xpath("//ul[@id='homefeatured']/li").should('have.length',1)
    })

    
    it('Chained XPath',()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.xpath("//ul[@id='homefeatured']").xpath('./li').should('have.length',1) // run multiple XPaths at once
    })
})