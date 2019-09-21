/// <reference types="Cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://www.lapalingo.com/en/login')
    })

    it('Enter missing password', () => {
        cy.get('#lionline_user_login__username')
            .type('invalidemail@test.com')
        cy.get('#main-login-submit').click()
        cy.contains('This field is required')
    })

    it('Enter missing email address', () => {
        cy.get('#lionline_user_login__password')
            .type('randompassword')
        cy.get('#main-login-submit').click()
        cy.contains('This field is required')
    })

    it('Enter invalid email address', () => {
        cy.get('#lionline_user_login__username')
            .type('invalidemailtest.com')
        cy.get('#lionline_user_login__password')
            .type('randompassword')
        cy.get('#main-login-submit').click()
        cy.contains('Please enter a valid email address.')
    })

    it('Enter correct credentials without confirming email', () => {
        cy.get('#lionline_user_login__username')
            .type('newtestemail2@gmail.com')
        cy.get('#lionline_user_login__password')
            .type('Testpassword1')
        cy.get('#main-login-submit').click()
        cy.contains('Unfortunately, your e-mail has not been confirmed. Please check your e-mails and spam folder. To resend the activation e-mail please click here.')
    })

    it('Enter correct credentials', () => {
        cy.get('#lionline_user_login__username')
            .type('zackgatt95@gmail.com')
        cy.get('#lionline_user_login__password')
            .type('Asdf1234')
        cy.get('#main-login-submit').click()
        cy.contains('Make a deposit')
    })

})