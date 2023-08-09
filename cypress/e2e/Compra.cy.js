/// <reference types="cypress" />
//npm install @faker-js/faker --save-dev

import { faker } from '@faker-js/faker'

describe('Efetuar compra de um produto', () =>{
    beforeEach(()=>{
        cy.visit('/')
        cy.loginValido()
        cy.adicionarCarrinho()

    })

    it('Compra efetuada com sucesso', () => {

        const usuario = {
            nome: faker.name.firstName(),
            sobrenome: faker.name.lastName(),
            cep: faker.address.zipCode()
        }

        cy.compraEfetuada(usuario)

    })
})