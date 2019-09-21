/// <reference types="Cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://www.lapalingo.com/en')
    })

    // if test fails, user is already logged out
    it('Check if logged out', () => {
        cy.visit('https://www.lapalingo.com/en/login')
        cy.get('#lionline_user_login__username')
            .type('zackgatt95@gmail.com')
        cy.get('#lionline_user_login__password')
            .type('Asdf1234')
        cy.get('#main-login-submit').click()
        cy.visit('https://www.lapalingo.com/en')
        cy.get('#main-logout-link').click( {force:true })
    })

    it('Invalid email / SQL Injection', () => {
        cy.get('.promo-logout-box-inner > .btn').click()
        cy.get('#lionline_user_registration_form_email')
            .type('a'+ ',' + 'a'+ ');drop table users;";$bypassed="')
        cy.get('#lionline_user_registration_form_plainPassword_first')
            .type('Testpassword1')
        cy.get('#lionline_user_registration_form_plainPassword_second')
            .type('Testpassword1')
        cy.get(':nth-child(4) > .checkbox > label').click()
        cy.get(':nth-child(5) > .checkbox > label').click()
        cy.get('.form-group--submit > .btn').click()
        cy.contains('Please enter a valid email address')
    })

    it('Invalid password', () => {
        cy.get('.promo-logout-box-inner > .btn').click()
        cy.get('#lionline_user_registration_form_email')
            .type('test@gmail.com')
        cy.get('#lionline_user_registration_form_plainPassword_first')
            .type('testpassword')
        cy.get('#lionline_user_registration_form_plainPassword_second')
            .type('testpassword')
        cy.contains('The password must be composed')
    })

    it('Mismatching password', () => {
        cy.get('.promo-logout-box-inner > .btn').click()
        cy.get('#lionline_user_registration_form_email')
            .type('test@gmail.com')
        cy.get('#lionline_user_registration_form_plainPassword_first')
            .type('Testpassword1')
        cy.get('#lionline_user_registration_form_plainPassword_second')
            .type('Testpassword2')
        cy.get(':nth-child(4) > .checkbox > label').click()
        cy.contains('Please enter the same value again')
    })

    it('Trying to register with used email', () => {
        cy.get('.promo-logout-box-inner > .btn').click()
        cy.get('#lionline_user_registration_form_email')
            .type('newtestemail2@gmail.com')
        cy.get('#lionline_user_registration_form_plainPassword_first')
            .type('Testpassword1')
        cy.get('#lionline_user_registration_form_plainPassword_second')
            .type('Testpassword1')
        cy.get(':nth-child(4) > .checkbox > label').click()
        cy.get(':nth-child(5) > .checkbox > label').click()
        cy.get('.form-group--submit > .btn').click()
        cy.url().should('eq','https://www.lapalingo.com/en/registration')
        cy.contains('The email is already used')
    })

    it('Succesful registration', () => {
        cy.get('.promo-logout-box-inner > .btn').click()
        cy.get('#lionline_user_registration_form_email')
            .type('newtestemail05@gmail.com')
        cy.get('#lionline_user_registration_form_plainPassword_first')
            .type('Testpassword1')
        cy.get('#lionline_user_registration_form_plainPassword_second')
            .type('Testpassword1')
        cy.get(':nth-child(4) > .checkbox > label').click()
        cy.get(':nth-child(5) > .checkbox > label').click()
        cy.get('.form-group--submit > .btn').click()
        cy.contains('An e-mail with activation link has been sent. Please check your mailbox (if necessary also in the Spam folder).')
    })

})