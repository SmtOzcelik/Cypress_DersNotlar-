/// <reference types="cypress" />

describe('Custon Command1',()=>{

    it('Positive Login',()=>{
    
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.login').click()
        cy.get('#email').type('smtab142790@gmail.com')
        cy.get('#passwd').type('Ab142790')
        cy.get('#SubmitLogin > span').click()

        cy.get('.account > span').should('include.text','Samet ozcelik')
    })
    
    it('Pozitif Login Metod Kullanımlı',()=>{
        
        cy.automationp_login('smtab142790@gmail.com','Ab142790')
        //automationp_login --> command.js de oluşturduk

        cy.get('.account > span').should('include.text','Samet ozcelik')

    
    })




    it.only('Negative Login',()=>{
    
        cy.automationp_login('smtab142790@gmail.com','Ab142797')
        //automationp_login --> command.js de oluşturduk

        cy.get('ol > li').should('include.text','Authentication failed.')
        cy.url().should('include','controller=authentication')
        

    })
    
    
    
    
    
    })