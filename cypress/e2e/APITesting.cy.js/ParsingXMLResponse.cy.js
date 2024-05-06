// Install xml2js library
// npm install xml2js

const xml2js = require ('xml2js');
const parser = new xml2js.Parser({explicitArray: false})

describe("XML Parsing", ()=>{
    const xmlPayload = ""
    let pedid = null;

    it("Creating Pet", ()=>{
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet',
            body: xmlPayload,
            headers: {
                'Content-Type':"application//xml",
                'accept':'application/xml'
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200);
            parser.parseString(response.body,(err,result)=>{
                petid = result.Pet.id;
            })
        })
    })
})
