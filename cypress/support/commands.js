Cypress.Commands.add('login', (email, password) => {
    cy.get('.menu-pop > .rprof').click()
    if(email != null){
        cy.get(':nth-child(5) > .imail').type(email)
    }

    if(password != null){
        cy.get('.ipass').type(password)
    }

    cy.get('.avtorization > .input-shablon > .form-button').click()
});



//mindoda gameketebina eqauntis washlis funqcia magram ver mivxvdi saidan ketdeba
Cypress.Commands.add('deleteUser', (email, password) => {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.get('.menu-pop > .rprof').click()
    cy.get(':nth-child(5) > .imail').type(email)
    cy.get('.ipass').type(password)
    cy.get('.avtorization > .input-shablon > .form-button').click()
});