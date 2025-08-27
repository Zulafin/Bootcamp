class loginPage {
    visit() {
        //Buka Halaman Website Login
        cy.visit('/')
    }

    inputUsername(username) {
        cy.get('input[placeholder="Username"]').clear().type(username)
    }

    inputPassword(password) {
        cy.get('input[placeholder="Password"]').clear().type(password)
    }

    Login_btn() {
        cy.get('button[type="submit"]').click()
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
        cy.get('.oxd-text.oxd-text--h6.orangehrm-forgot-password-title')
          .should('contain', 'Reset Password link sent successfully')
    }
}

export default new loginPage();