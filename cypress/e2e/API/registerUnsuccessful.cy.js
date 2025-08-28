/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('Register User Unsuccessful (POST)', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            headers: {
                'x-api-key': 'reqres-free-v1'
            },
            failOnStatusCode: false,
            body: {
                email: 'sydney@fife'}
        })
        .then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', 'Missing password')
        })
    })
})