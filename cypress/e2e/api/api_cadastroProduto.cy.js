/// <reference types="cypress" />

describe('Cadastro novo produto', () => {

    const token = `${Cypress.env('token')}`

    it('Produto cadastrado com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/produtos',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: {
                "nome": "Playstation 5",
                "preco": 700,
                "descricao": "Vídeo game",
                "quantidade": 10
            },
            // failOnStatusCode: false
        }).then((resposta) => {
            expect(resposta.status).to.equal(201)
            expect(resposta.body.message).to.equal('Cadastro realizado com sucesso')
        })
    })
})