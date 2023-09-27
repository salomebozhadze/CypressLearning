class LoginPage {

    getSignInButton(){
        return cy.get('#signin')
    }

    getEmailField(){
        return cy.get('#UserID')
    }

    getPasswordField(){
        return cy.get('#Password')

    }

    getLoginButton(){
        return cy.get('.btn')
    }

}
export default LoginPage;