describe('Data Driven Testing', () => {
    it('DD Demo', () => {
        cy.fixture('orangehrm2').then((data) => {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            data.forEach((userdata) => {
                cy.get("input[placeholder='Username']").type(userdata.username); 
                cy.get("input[placeholder='Password']").type(userdata.password); 
                cy.get("button[type='submit']").click();

                if (userdata.username === 'admin' && userdata.password === 'admin123') {
                    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', userdata.expected);
            }
                 else {
                    cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text', userdata.expected);
                }
            });
        });
    });
});
