Cypress.Commands.add('loginValido', (
    login = Cypress.env('userName'),
    senha = Cypress.env('password'),
) => {

    cy.get('input[placeholder="Username"]').type(login)
    cy.get('input[placeholder="Password"]').type(senha, { log: false })
    cy.get('input[type="submit"]').click()

})

Cypress.Commands.add('loginInvalido', (login, senha) => {

    cy.get('input[placeholder="Username"]').type(login)
    cy.get('input[placeholder="Password"]').type(senha, { log: false })
    cy.get('input[type="submit"]').click()

})

Cypress.Commands.add('Logout', () => {

    cy.get('button[id="react-burger-menu-btn"]').click()
    cy.get('#logout_sidebar_link').click()

})

Cypress.Commands.add('outrosUsuarios', (usuario) => {

    cy.get('input[placeholder="Username"]').type(usuario.userName)
    cy.get('input[placeholder="Password"]').type(usuario.password, { log: false })
    cy.get('input[type="submit"]').click()
})


Cypress.Commands.add('adicionarCarrinho', () => {
    cy.get('[data-test="product_sort_container"]')
        .select('Price (high to low)')

    cy.get('.inventory_item_description')
        .find('.inventory_item_name')
        .contains('Sauce Labs Backpack')
        .should('be.visible')
        .parent()
        .click()

    cy.contains('Add to cart').click()
    cy.contains('Remove').should('be.visible')

    //    cy.get('#add-to-cart-sauce-labs-backpack').click()
    //    cy.get('#remove-sauce-labs-backpack').should('have.text', 'Remove')

    cy.get('.shopping_cart_link').click()
})


Cypress.Commands.add('compraEfetuada', (usuario) => {
    cy.get('button[name="checkout"]').click()

    cy.get('[name="firstName"]').type(usuario.nome)
    cy.get('[name="lastName"]').type(usuario.sobrenome)
    cy.get('[name="postalCode"]').type(usuario.cep)
    cy.get('[name="continue"]').click()

    cy.get('.cart_item_label')
        .find('.inventory_item_name')
        .contains('Sauce Labs Backpack')
        .should('be.visible')

    cy.get('[name="finish"]').click()

    cy.contains('Thank you for your order!')
        .should('be.visible')
})