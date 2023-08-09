/// <reference types="cypress" />

describe('Validando funcionalidade de Logout', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.loginValido()
    })

    it('Logout com Sucesso!', () => {
        cy.Logout()

        cy.contains('Login').should('be.visible')
    })
})