// describe ('Scenario Login', () => {
//     it('TC001-Valid Login', () => {
//         cy.visit('https://www.saucedemo.com/')
//         cy.get('#user-name').type('standard_user')
//     })
// })


describe ('Scenario Verifikasi fungsi Login', () => {
    it('TC001-Login dengan username valid & password valid', () => {
        cy.visit('https://www.saucedemo.com/v1/index.html')

        cy.get('#user-name').type('standard_user')
        cy.get('#user-name').should('have.value', 'standard_user')
        cy.get('#password').type('secret_sauce')

        //intercept
        cy.intercept('GET', 'https://www.saucedemo.com/v1/img/SwagBot_Footer_graphic.png').as('loginRequest')

        cy.get('.btn_action').should('be.visible')
        cy.get('.btn_action').click()
        cy.wait('@loginRequest').its('response.statusCode').should('eq', 200)
        // cy.url().should('include', 'iventory')
    })
})