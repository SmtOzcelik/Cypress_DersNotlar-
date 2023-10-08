/// <reference types="cypress" />
import HomePage  from "../POM/HomePage.cy"
import LoginPage from "../POM/LoginPage.cy"

describe('Automation Practive',()=>{
    
    before(function(){

        cy.fixture('automationPractice').then(function(data){
            this.data=data

        })
    })

    it('Automation Practive Login Test',function(){
    
        const homePage=new HomePage()
        const loginPage=new LoginPage()



        cy.visit(this.data.url)

        //cy.get('.login').click()
        homePage.getSigninLink().click()

        //cy.get('#email').type(this.data.email)
        loginPage.getEmailBox().type(this.data.email)

        //cy.get('#passwd').type(this.data.password)
        loginPage.getPasswordBox().type(this.data.password)

        //cy.get('#SubmitLogin > span').click()
        loginPage.getLoginButon().click()
        
        //cy.get('.logout').should('be.visible')
        loginPage.getSignOutText()

        loginPage.getUserNameText().should('include.text','Samet')
    
    })

})