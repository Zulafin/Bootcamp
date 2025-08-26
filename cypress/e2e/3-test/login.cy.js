describe ('OrangeHRM Login Feature', () => {
    const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'

    beforeEach(() => {
        cy.visit(url)
    })

    it('TC_001 - Login dengan username dan password valid', () => {
        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('input[placeholder="Password"]').type('admin123')

        //intercept
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary')
        cy.get('button[type="submit"]').click()
        cy.wait('@actionSummary').its('response.statusCode').should('eq', 200)

        cy.url().should('include', '/dashboard')
    })

    it('TC_002 - Login dengan username & password tidak valid', () => {
        cy.get('input[placeholder="Username"]').type('User')
        cy.get('input[placeholder="Password"]').type('user12')
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-alert-content').should('contain', 'Invalid credentials')
    })

    it('TC_003 - Login gagal dengan password salah', () => {
        cy.get('input[placeholder="Username"]').type('User') //username salah
        cy.get('input[placeholder="Password"]').type('admin123') //password valid
        cy.get('button[type="submit"]').click();
        cy.get('.oxd-alert-content').should('contain', 'Invalid credentials')
    });

    it('TC_004 - Login dengan username valid dan password salah', () => {
        cy.get('input[placeholder="Username"]').type('Admin') //username valid
        cy.get('input[placeholder="Password"]').type('admin234') //password salah
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-alert-content').should('contain', 'Invalid credentials')
    })

    it('TC_005 - Login tanpa mengisi username & password', () => {
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-input-field-error-message').should('contain', 'Required')
    })

    it('TC_006 - Login dengan username valid & password kosong', () => {
        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-input-field-error-message').should('contain', 'Required')
    })

    it('TC_007 - Login dengan password valid & username kosong', () => {
        cy.get('input[placeholder="Password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-input-field-error-message').should('contain', 'Required')
    })
    
    it('TC_008 - Forgot Password dengan username valid', () => {
        cy.get('.orangehrm-login-forgot > .oxd-text').click()
        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-text.oxd-text--h6.orangehrm-forgot-password-title').should('contain', 'Reset Password link sent successfully')
    })
})