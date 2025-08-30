class loginPage {
    visit() {
        //Buka Halaman Website Login
        cy.visit('/')
    }

    inputUsername(username) {
        cy.get('[name="username"]').clear().type(username)
    }

    inputPassword(password) {
        cy.get('[name="password"]').clear().type(password)
    }

    interceptLogin(){
         cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary')
    }

    Login_btn() {
        cy.get('button[type="submit"]').should('be.visible').click()
    }
    verifyIntercept(){
        cy.wait('@actionSummary').its('response.statusCode').should('eq', 200)
    }

    clickForgotPassword() {
        cy.get('.orangehrm-login-forgot > .oxd-text').click()
    }

    // Assertions
    verifyLoginSuccess() {
        cy.url().should('include', '/dashboard')
    }

    verifyUsernamePasswordError() {
        cy.get('.oxd-alert-content').should('contain.text', 'Invalid credentials')
    }

    verifyUsernamePasswordRequiredError() {
        cy.get('.oxd-input-field-error-message').should('contain.text', 'Required')
    }

    verifyResetPasswordSuccess() {
        cy.get('.oxd-text.oxd-text--h6.orangehrm-forgot-password-title').should('contain', 'Reset Password link sent successfully')
    }

    verifyResetPasswordError() {
       cy.get('.oxd-input-group > .oxd-text').should('contain', 'Required')
    }
}

export default new loginPage();