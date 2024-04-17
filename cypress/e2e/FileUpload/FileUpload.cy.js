import 'cypress-file-upload';

describe ('File Upload',()=>{

    it('Single File Upload',()=>{
        cy.visit('https://practice.expandtesting.com/upload');
        cy.get('#fileInput').attachFile('testing.pdf');
        cy.get('#fileSubmit').click();
        cy.wait(5000);
        cy.get("div.container h1").should('have.test',"File Uploaded!");
    })

    it.only('File Upload - Rename',()=>{
        cy.visit('https://practice.expandtesting.com/upload');
        cy.get('#fileInput').attachFile({filepath:'testing.pdf', fileName:'practiseTest.pdf'});
        cy.get('#fileSubmit').click();
        cy.wait(5000);
        cy.get("div.container h1").should('have.test',"File Uploaded!");
    })
    })