/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

describe('API cadastro novo usuário', ()=>{
    it('Cadastro com sucesso', () =>{

        const nome = faker.name.firstName();
        const email = faker.internet.email();


        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/usuarios',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "nome": nome,
                "email": email,
                "password": "fulano",
                "administrador": "true"
            }

        }).then((Resposta)=>{
            expect(Resposta.status).to.equal(201)
            expect(Resposta.body.message).to.equal('Cadastro realizado com sucesso')

        })
    })
})