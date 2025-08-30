class menuPage{
    visit() {
        cy.visit('/')
    }

    directoryMenu() {
        cy.get(':nth-child(9) > .oxd-main-menu-item').should('be.visible').click()
    }

    interceptDirectory() {
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0').as('employeeLimit')
    }

    inputEmployeeName(employeeName){
        cy.get('.oxd-autocomplete-text-input > input').clear().type(employeeName)
    }

    selectEmployeeName(employeeName, completeEmployeeName){
        cy.get('.oxd-autocomplete-text-input > input').clear().type(employeeName)
        cy.get('.oxd-autocomplete-dropdown').should('be.visible')
        cy.contains('.oxd-autocomplete-dropdown', completeEmployeeName, { matchCase: false }).should('be.visible').click()
    }

    selectJobTitle(jobTitle) {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').should('be.visible').click()
        cy.contains('.oxd-select-option', jobTitle).click()
    }

    selectLocation(location) {
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').should('be.visible').click()
        cy.contains('.oxd-select-option', location).click()
    }

    Search_btn() {
        cy.get('.oxd-button--secondary').should('be.visible').click()
    }

    Reset_btn() {
        cy.get('button[type="reset"]').should('be.visible').click()
    }

    //Assertions
    verifyDirectoryPage(){
        cy.url().should('include', '/directory/viewDirectory')
    }

    verifyInterceptDirectory(){
        cy.wait('@employeeLimit').its('response.statusCode').should('eq', 200)
    }

    verifyErrorMessage(){
        cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message').should('contain.text', 'Invalid')
    }

    verifyNotFoundToast() {
        cy.get('.oxd-toast-content.oxd-toast-content--info').should('be.visible').and('contain.text', 'No Records Found')
        cy.get('.oxd-toast-content.oxd-toast-content--info').should('not.exist')
    }

    verifyDataResult(name, jobTitle, location) {
        cy.get('.oxd-grid-item').should('contain.text', name)
        cy.get('.oxd-grid-item').should('contain.text', jobTitle)
        cy.get('.oxd-grid-item').should('contain.text', location)
    }
}

export default new menuPage();