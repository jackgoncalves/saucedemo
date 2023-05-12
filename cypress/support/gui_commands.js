Cypress.Commands.add('usuarioValido', (nome, senha) => {

    cy.get('input[placeholder="Username"]').type(nome)
    cy.get('input[placeholder="Password"]').type(senha, { log: false })
    cy.get('input[type="submit"]').click()

    cy.url().should('contains', 'inventory.html')
})

Cypress.Commands.add('loginLogout', (nome, senha) => {

    cy.get('input[placeholder="Username"]').type(nome)
    cy.get('input[placeholder="Password"]').type(senha, { log: false })
    cy.get('input[type="submit"]').click()

    cy.get('[class="bm-burger-button"]').click()
    cy.get('#logout_sidebar_link').click()

    cy.url().should('eq', 'https://www.saucedemo.com/')
})

Cypress.Commands.add('usuarioBloqueado', () => {
    cy.get('input[placeholder="Username"]').type('locked_out_user')
    cy.get('input[placeholder="Password"]').type('secret_sauce')
    cy.get('input[type="submit"]').click()

    cy.get('[class="error-message-container error"]')
        .should('have.text', 'Epic sadface: Sorry, this user has been locked out.')

})

Cypress.Commands.add('usuarioInvalido', (nome, senha) => {
    cy.get('input[placeholder="Username"]').type(nome)
    cy.get('input[placeholder="Password"]').type(senha)
    cy.get('input[type="submit"]').click()

    cy.get('[class="error-message-container error"]')
        .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
})

Cypress.Commands.add('outrosUsuarios', (usuario) => {
    cy.get('input[placeholder="Username"]').type(usuario.userName)
    cy.get('input[placeholder="Password"]').type(usuario.password, {log: false})
    cy.get('input[type="submit"]').click()

    cy.get('[class="bm-burger-button"]').click()
    cy.get('#logout_sidebar_link').click()

    cy.url().should('eq', 'https://www.saucedemo.com/')
})


