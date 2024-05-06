describe ('Handle Alerts',()=>{

    it('Alert Popups',()=>{
        cy.visit("https://practice-automation.com/popups/")
        cy.get("button[id='alert']").click();

        cy.on('window:alert',(t)=>{
            expect(t).to.contain('Hi there, pal!')
        })
    })

    it('Confirmation Alert- OK button',()=>{
        cy.visit("https://practice-automation.com/popups/")
        cy.get("#confirm").click();

        cy.on('window:alert',(t)=>{
            expect(t).to.contain('OK or Cancel, which will it be?')
        })

        cy.get('#confirmResult').should('have.text','OK it is!')
    })

    it('Confirmation Alert- Cancel button',()=>{
        cy.visit("https://practice-automation.com/popups/")
        cy.get("#confirm").click();

        cy.on('window:alert',(t)=>{
            expect(t).to.contain('OK or Cancel, which will it be?')
        })
        cy.on('window:confirm',()=> false); //to close window using cancel button, otherwise cypress closing it using OK button by default.
        cy.get('#confirmResult').should('have.text','Cancel it is!')
    })

    it('Prompt Alert- OK button',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.window().then((w)=>{
            cy.stub(w,'prompt').returns("Hi there, what's your name?");
        })
        cy.get("#prompt").click();
        // cy.get('#promptResult').should('have.text',"Hi there, what's your name?")
    })
    it.only('Prompt Alert- Cancel button',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.window().then((w)=>{
            cy.stub(w,'prompt').returns("Please enter your name:", "Harry Potter");
        })
        cy.get("button[onclick='myFunctionPrompt()']").click();
        cy.on('window:Prompt',()=> false); 
        cy.get('#demo').should('have.text','Hello Please enter your name:! How are you today?')
    })
})
