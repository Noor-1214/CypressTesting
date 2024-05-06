describe("HTTP Requests", ()=>{
    it ("GET Call", ()=>{
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status').should('equal', 200);
    })


    it ("Post Call", ()=>{
        cy.request({
            method: 'POST',
            url: 'http://jsonplaceholder.typicode.com/posts',
            body: {
                title: "Test post",
                body: "this is post call",
                userId:1
            }
        })
        .its('status').should('equal', 201)
    })

    it ("Put Call", ()=>{
        cy.request ({
            method: 'PUT',
            url: 'http://jsonplaceholder.typicode.com/posts/1',
            body: {
                title: "Test post - Updated",
                body: "This is a put call",
                userId: 1,
                id: 1
            }
        })
        .its('status').should('equal', 200)
    })

    it ("Delete Call", ()=>{
        cy.request ({ //If don't wanna put {}, no need to write 'method', 'url. Follow the syntax of get request.
            method: 'DELETE',
            url: 'http://jsonplaceholder.typicode.com/posts/1',
        })
        .its('status').should('equal',200)
    })
})