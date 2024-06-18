class LoginPage {
  setEmail(x) {
    cy.get("#Email").type(x);
  }

  setPassword(x) {
    cy.get("#inputPassword").type(x);
  }

  signIn() {
    cy.get("#btnLogin").click();
  }
}

export default LoginPage;
