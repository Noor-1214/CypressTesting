describe ('mysuite',()=>{
    it ('Capture screenshots', ()=>{
        cy.visit ("https://demo.nopcommerce.com/")
        cy.screenshot("img[title='Show details for Build your own computer']")
        cy.wait(2000);
        cy.get("img[alt='nopCommerce demo store']").screenshot("logo")
    })


// Capture screenshot or video on failure 
it.only ('Capture screenshots', ()=>{
    cy.visit ("https://demo.nopcommerce.com/shoes")
    cy.get("body > div:nth-child(7) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1) > a:nth-child(1)").click()
    cy.get("div[class='product-name'] h1").should('have.text','cameras')
})

})

