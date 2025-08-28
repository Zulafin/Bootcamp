/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('Login User Unsuccessful (POST)', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            headers: {
                'x-api-key': 'reqres-free-v1'
            },
            failOnStatusCode: false,
            body: {
                email: 'peter@klaven'}
        })
        .then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', 'Missing password')
        })
    })
})