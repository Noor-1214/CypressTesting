describe('Custom Commands',()=>{

// click on links using labels
it.only("handling links",()=>{
    cy.visit ("https://demo.nopcommerce.com/")

    // // Without using Custom Commands
    // cy.xpath("//a[normalize-space()='Apple MacBook Pro 13-inch']").should("have.text","Apple MacBook Pro 13-inch")

    //Using Custom Commands
    cy.ClickLink("Apple MacBook Pro 13-inch")
    cy.xpath("//a[normalize-space()='Apple MacBook Pro 13-inch']").should("have.text","Apple MacBook Pro 13-inch")
})

})