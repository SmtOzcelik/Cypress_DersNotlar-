/// <reference types="cypress" />

describe('Automation Practive',()=>{
    
    before(function(){

        cy.fixture('automationPractice').then(function(data){
            this.data=data

        })
    })

    it('Automation Practive Login Test',function(){
    
        //cy.visit('http://www.automationpractice.pl/index.php')
        cy.visit(this.data.url)

        cy.get('.login').click()

        //cy.get('#email').type('smtab142790@gmail.com')
        cy.get('#email').type(this.data.email)

        //cy.get('#passwd').type('Ab142790')
        cy.get('#passwd').type(this.data.password)
        cy.get('#SubmitLogin > span').click()
    
        cy.get('.account > span').should('include.text','Samet')
        cy.get('.account > span').should('include.text','ozcelik')
        cy.get('.logout').should('be.visible')
    
    })

})