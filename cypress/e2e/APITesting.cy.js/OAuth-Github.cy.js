/* 1. Get the OAuth2 access token 
 POST: https://github.com/login/oauth/access_token
Query Params
client_id
client_secret
code


  2. Send GET request by using access token
  https://api.github.com/users/repos
  Auth: accessToken
*/


describe ("OAuth2",()=>{

    let accessToken = "";
    it("Get OAuth access token",()=>{
        cy.request({
            method: 'POST',
            url: 'https://github.com/login/oauth/access_token',
            qs:{
                client_id: 'Ov23liQGkaPSaEvNMCBa',
                client_secret: '87735625bd1d2f759a18451c89dde97ad553990e',
                code: '5a8a3fd47f484494fe6d'
            }
        })
        .then((response)=>{
          const params = response.body.split('&');
          accessToken = params[0].split("=")[1];
        })
    })


    it("OAuth2 request",()=>{
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/users/repos',
            headers:{
                Authorization: 'Bearer' +accessToken, //Token generated in previous request
                client_secret: '87735625bd1d2f759a18451c89dde97ad553990e',
                code: '5a8a3fd47f484494fe6d'
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
        })
    })
})
