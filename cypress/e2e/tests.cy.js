describe('template spec', function() {
  beforeEach(() => {
    cy.fixture('loginUser').as('loginUser');
    cy.fixture('registerUser').as('registerUser');
  });

  it('Login user with valid credentials', function() {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.login(this.loginUser.email, this.loginUser.password)
    cy.get('.menu-pop > .iprof').should('exist')
  })

  it('Login user with without email', function() {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.login(null , this.loginUser.password)
    cy.get('.input-div.alert > .alert > img').should('exist')
    cy.get('.input-div.alert > .alert > img').should('be.visible')
  })

  it('Add product to shopping cart', function() {

    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"] > #cart-items-count')
    .invoke('text')
    .then((text) => {
      const cartnumberBefore = parseInt(text.trim());
      cy.login(this.loginUser.email, this.loginUser.password);
      cy.get('.pug > .seepro').click();
      cy.get(':nth-child(1) > .price-cart > .product-cart').click();
      const after = cartnumberBefore + 1;
      cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"] > #cart-items-count')
        .should('have.text', after.toString());
    });
    
  })

  it('Delete product from shopping cart', function() {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.login(this.loginUser.email, this.loginUser.password);
    cy.get('.pug > .seepro').click()
    cy.get(':nth-child(1) > .price-cart > .product-cart').click()
    
    cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
    cy.get('.clear > a').click()
    cy.get('.empty > p').should('exist')
    cy.get('.empty > p').should('be.visible')
  })

  it('Register user with valid credentials', function() {

    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.get('.menu-pop > .rprof').click()
    cy.get('.input-shablon > p > a').click()
    cy.get(':nth-child(1) > .ismile').type(this.registerUser.fullName)
    cy.get(':nth-child(2) > .imail').type(this.registerUser.email)
    cy.get('.ipir').type(this.registerUser.id)
    cy.get(':nth-child(4) > .itel').type(this.registerUser.phone)
    cy.get(':nth-child(5) > .ipass').type(this.registerUser.password)
    cy.get('.reg-form-left > :nth-child(6) > .ipass').type(this.registerUser.rePassword)
    cy.get('#etx').check({ force: true });
    cy.get('.regsub').click()

    cy.get('.menu-pop > .iprof').should('exist')
  })
})

