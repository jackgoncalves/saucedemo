/// <reference types="cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login com Sucesso!', () => {
    const login = Cypress.env('userName')
    const senha = Cypress.env('password')

    cy.loginValido(login,senha)

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}inventory.html`)

  })

  it('Login inválido', () => {
    const login = 'jack'
    const senha = 'jack123'
    const mensagem = 'Epic sadface: Username and password do not match any user in this service'

    cy.loginInvalido(login,senha)

    cy.get('.error-message-container.error').should('have.text', mensagem)

  })

  const usuarios = require('../../fixtures/usuarios.json')
  usuarios.forEach((usuario) => {
    it(`Validando outros Logins válido ${usuario.userName}`,() => {
      cy.outrosUsuarios(usuario)

      cy.url().should('be.equal', `${Cypress.config('baseUrl')}inventory.html`)

    })
  })
})