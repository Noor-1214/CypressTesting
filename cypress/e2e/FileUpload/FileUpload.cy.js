// import 'cypress-file-upload';

describe ('File Upload',()=>{

    it('Single File Upload',()=>{
        cy.visit('https://practice.expandtesting.com/upload');
        cy.get('#fileInput').attachFile('testing.pdf')  
        cy.wait(2000);   
        cy.get('#fileSubmit').click();
        cy.wait(2000);
        cy.get("div.container h1").should('have.test',"File Uploaded!");
    })

    it.only('File Upload - Rename',()=>{
        cy.visit('https://practice-automation.com/file-upload/');
        cy.fixture('testing.pdf').then(fileContent => {
            cy.get('#file-upload').attachFile({
                fileContent: fileContent.toString(),
                fileName: 'practiseTest.pdf',
                mimeType: 'application/pdf'
            });
        });
        cy.wait(2000);
        cy.get('#upload-btn').click();
        cy.wait(2000);
        cy.get(".wpcf7-response-output").should('contain.text', "Thank you for your message. It has been sent."); 
    })

    it('single file upload - drag & drop', ()=> {

        cy.visit("https://practice.expandtesting.com/upload")
        cy.get("#fileInput").attachFile('testing.pdf', {subjectType: 'drag-n-drop'})  
        cy.wait(3000)
        cy.get("#fileSubmit").click()
        cy.wait(3000)
        cy.get("div[class='container'] h1").should('have.text', 'File Uploaded!')
    })
})