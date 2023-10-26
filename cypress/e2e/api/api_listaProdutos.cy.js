/// <reference types="cypress" />

describe('Buscar lista dos produtos cadastrados', () => {

    it('Buscar produto', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/produtos',
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then((resposta)=>{
            console.log(resposta)
            expect(resposta.status).to.equal(200)
            expect(resposta.body).is.not.empty
            expect(resposta.body.produtos[0]).to.have.property('nome')
            expect(resposta.body.produtos[0].nome).to.equal('Playstation 5')


            expect(resposta.body.produtos[3]).to.have.property('descricao')
            expect(resposta.body.produtos[3].descricao).to.equal('Mouse')
            expect(resposta.body.produtos[3].nome).to.equal('Logitech MX Vertical')
        })
    })
})
