/// <reference types="cypress" />

describe('Adicionar produto no carrinho', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.loginValido()
    })

    it('Produto adicionado no carrinho com sucesso!', () => {
        cy.adicionarCarrinho()

    })
})

