/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('List <Resource> Test (GET)', () => {
        cy.request('GET', 'https://reqres.in/api/unknown')
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
        })
    })
})