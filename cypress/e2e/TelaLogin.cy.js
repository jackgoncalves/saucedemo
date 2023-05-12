/// <reference types="cypress" />


describe('Testando as funcionalidades de Login e Logout', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.contains('[class="login_logo"]', 'Swag Labs').should('be.visible')

  })

  it('Efetuando de Login com usuário válido', () => {
    cy.usuarioValido(Cypress.env('userName'), Cypress.env('password'))

  })

  it('Efetuando de Login e Logout no sistema', () => {
    cy.loginLogout(Cypress.env('userName'), Cypress.env('password'))

  })

  it('Efetuar login com usuário bloqueado', () => {
    cy.usuarioBloqueado()

  })

  it('Efetuar login com usuário inválido', () => {
    cy.usuarioInvalido('jack', '12345')

  })

  const usuarios = require('../fixtures/usuarios.json')
  usuarios.forEach((usuario) => {
    it(`Efetuando Login com outros usuários válidos ${usuario.userName}`, () => {
      cy.outrosUsuarios(usuario)

    })

  })

})