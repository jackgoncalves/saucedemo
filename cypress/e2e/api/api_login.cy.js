/// <reference types="cypress" />


describe('login com API', () => {
    it('Login com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "email": "fulano@qa.com",
                "password": "teste"
            },
            
        }).then((reposta) => {
            console.log(reposta)
            expect(reposta.status).to.equal(200)
            expect(reposta.body.message).to.equal('Login realizado com sucesso')
        })
    })

    it('Falha no login', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "email": "fulano@qa.com",
                "password": "teste123"
            },
            failOnStatusCode: false
        }).then((resposta)=>{
            expect(resposta.status).to.equal(401)
            expect(resposta.body.message).to.equal('Email e/ou senha inválidos')
        })
    })
})