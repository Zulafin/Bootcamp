/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('Single User Not Found Test (GET)', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/23',
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