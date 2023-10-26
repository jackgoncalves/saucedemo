/// <reference types="cypress" />


describe('Excluir produto da lista', () => {

    const token = `${Cypress.env('token')}`
    const produtoId = '7EG5BOJ1HZ5hVW29'

    it('Produto excluido com sucesso', () => {

        cy.request({
            method: 'DELETE',
            url: `http://localhost:3000/produtos/${produtoId}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then((resposta) => {
            console.log(resposta)
            expect(resposta.status).to.equal(200)
            expect(resposta.body.message).to.equal('Registro excluído com sucesso | Nenhum registro excluído')
        })
    })

})
