class LoginPage{


    getEmailBox(){

        return cy.get('#email')
    }

    getPasswordBox(){
        
        return cy.get('#passwd')

    }

    getLoginButon(){

        return cy.get('#SubmitLogin > span')
    }

    getSignOutText(){
        return cy.get('.logout').should('be.visible')

    }

    getUserNameText(){

        return cy.get('.account > span')
    }
}
export default LoginPage