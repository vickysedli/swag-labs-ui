import AuthPage from "../pages/auth.page";
import ProductsPage from "../pages/products.page";

describe('Authentication', () => {
  beforeEach( () => {
    AuthPage.open()//cy.visit('/') // open web page on the link which in ""
  })

  it('Log in with valid credentials', () => {
    AuthPage.inputUsername.type(Cypress.env('username'))
    AuthPage.inputPassword.type(Cypress.env('password'))
    AuthPage.buttonLogin.click()

    ProductsPage.path.should('eq', '/inventory.html') //
    ProductsPage.linkCart.should('be.visible')
  })
})