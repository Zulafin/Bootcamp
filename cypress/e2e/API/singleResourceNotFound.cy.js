/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('Single <Resource> Not Found Test (GET)', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown/23',
            headers: {
                'x-api-key': 'reqres-free-v1'
            },
            failOnStatusCode: false
        })
        .then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.deep.equal({})
        })
    })
})