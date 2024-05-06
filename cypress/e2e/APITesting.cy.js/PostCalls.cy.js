describe ('API Testing', ()=>{
    it ('Approach1-Hard coded json object',()=>{
        const requestBody={
            tourist_name: "Mike",
            tourist_email: "john12345@gmail.com",
            tourist_location: "Paris"
        }
        cy.request({
            method: 'POST',
            url: 'http://jsonplaceholder.typicode.com/posts',
            body: requestBody //Can hardcode the body here
        })
        .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq("Mike") //Validation
            expect(response.body.tourist_email).to.eq("john12345@gmail.com")
            expect(response.body.tourist_location).to.eq("Paris")
        })
    })


    it ('Approach2-Dynamically Generatin a json object',()=>{
        const requestBody={
            tourist_name: Math.random().toString(5).substring(2),
            tourist_email: Math.random().toString(5).substring(2) + "@gmail.com",
            tourist_location: "Paris"
        }
        cy.request({
            method: 'POST',
            url: 'http://jsonplaceholder.typicode.com/posts',
            body: requestBody //Can hardcode the body here
        })
        .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name) //Validation
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
        })
    })


    it ('Approach3-Using Fixtures',()=>{
        cy.fixture('Tourist').then((data)=>{
            const requestBody=data;
    
        cy.request({
            method: 'POST',
            url: 'http://jsonplaceholder.typicode.com/posts',
            body: requestBody
        })
        .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name) //Validation
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
        })
    })
})
})